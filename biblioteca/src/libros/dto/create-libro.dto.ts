import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLibroDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNumber()
  anio_publicacion: number;

  @IsNumber()
  stock: number;
}
