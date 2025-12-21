import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIdiomaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
