import { Module } from '@nestjs/common';
import { TipoLibroController } from './tipo-libro.controller';
import { TipoLibroService } from './tipo-libro.service';

@Module({
  controllers: [TipoLibroController],
  providers: [TipoLibroService]
})
export class TipoLibroModule {}
