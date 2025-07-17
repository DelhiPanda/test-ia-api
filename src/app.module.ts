import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { Product, ProductSchema } from './schemas/product.schema';
import { Order, OrderSchema } from './schemas/order.schema';
import { ProductsService } from './services/products.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://delhipanda:NKkdK4D2bG4HZ14s@cluster0.ptgfkza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Order.name, schema: OrderSchema },
    ]),
  ],
  controllers: [AppController, ProductsController, OrdersController],
  providers: [AppService, ProductsService, OrdersService],
})
export class AppModule {}
