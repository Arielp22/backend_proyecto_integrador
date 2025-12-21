import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEstadoLibroDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
