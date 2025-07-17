import { IsString, IsNumber, IsOptional, Min, IsBoolean, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  @IsUrl()
  image: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
} 