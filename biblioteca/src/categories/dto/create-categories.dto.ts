import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoriesDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsOptional()
  descripcion?: string;
}
