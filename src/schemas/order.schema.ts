import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ _id: false })
export class OrderItem {
  @Prop({ type: Types.ObjectId, ref: 'Item', required: true })
  itemId: Types.ObjectId;

  @Prop({ required: true, min: 1 })
  quantity: number;

  @Prop({ required: true, min: 0 })
  price: number;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: [OrderItemSchema], required: true })
  items: OrderItem[];

  @Prop({ required: true, min: 0 })
  totalAmount: number;

  @Prop({ 
    required: true, 
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  })
  status: string;

  @Prop()
  customerName: string;

  @Prop()
  customerEmail: string;

  @Prop()
  shippingAddress: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order); 