import { IsNumber, IsString } from 'class-validator';

export class CreateMultaDto {
  @IsString()
  prestamo_id: string;

  @IsNumber()
  monto: number;
}
