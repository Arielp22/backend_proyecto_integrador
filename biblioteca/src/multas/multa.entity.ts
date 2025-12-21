import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('multas')
export class Multa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  prestamo_id: string;

  @Column()
  monto: number;

  @Column({ default: false })
  pagado: boolean;
}
