import { IsString, IsNumber, IsOptional, Min, IsArray, ValidateNested, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

export class OrderItemDto {
  @IsMongoId()
  itemId: string;

  @IsNumber()
  @Min(1)
  quantity: number;
}

export class CreateOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsString()
  @IsOptional()
  customerName?: string;

  @IsString()
  @IsOptional()
  customerEmail?: string;

  @IsString()
  @IsOptional()
  shippingAddress?: string;
} 