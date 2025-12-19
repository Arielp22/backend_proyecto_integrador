import { Module } from '@nestjs/common';
import { EstadoLibroController } from './estado-libro.controller';
import { EstadoLibroService } from './estado-libro.service';

@Module({
  controllers: [EstadoLibroController],
  providers: [EstadoLibroService]
})
export class EstadoLibroModule {}
