import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { Order } from '../schemas/order.schema';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order> {
    return this.ordersService.findOne(id);
  }
} 