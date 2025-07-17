import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order, OrderDocument, OrderItem } from '../schemas/order.schema';
import { CreateOrderDto } from '../dto/create-order.dto';
import { ProductsService } from './products.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private productsService: ProductsService,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const orderItems: OrderItem[] = [];
    let totalAmount = 0;

    // Validate items and calculate total
    for (const orderItem of createOrderDto.items) {
      const product = await this.productsService.findOne(orderItem.itemId);
      
      if (product.stock < orderItem.quantity) {
        throw new BadRequestException(`Insufficient stock for product: ${product.name}`);
      }

      const productTotal = product.price * orderItem.quantity;
      totalAmount += productTotal;

      orderItems.push({
        itemId: new Types.ObjectId(orderItem.itemId),
        quantity: orderItem.quantity,
        price: product.price,
      });
    }

    // Create order
    const order = new this.orderModel({
      items: orderItems,
      totalAmount,
      customerName: createOrderDto.customerName,
      customerEmail: createOrderDto.customerEmail,
      shippingAddress: createOrderDto.shippingAddress,
    });

    const savedOrder = await order.save();

    // Update stock for all items
    for (const orderItem of createOrderDto.items) {
      await this.productsService.updateStock(orderItem.itemId, orderItem.quantity);
    }

    return savedOrder;
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().populate('items.itemId').exec();
  }

  async findOne(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).populate('items.itemId').exec();
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }
} 