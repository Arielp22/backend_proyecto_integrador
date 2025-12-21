import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('libros')
export class Libro {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  anio_publicacion: number;

  @Column()
  stock: number;
}
