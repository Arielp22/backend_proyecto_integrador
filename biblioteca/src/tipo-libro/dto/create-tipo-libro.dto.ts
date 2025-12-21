import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTipoLibroDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
