import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateLibroDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsNumber()
  anio_publicacion?: number;

  @IsOptional()
  @IsNumber()
  stock?: number;
}
