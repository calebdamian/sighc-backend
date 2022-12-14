import { DrugEntity } from 'src/drug/entities/drug.entity';
import { PatientEntity } from 'src/patient/entity/patient.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('evolution')
export class EvolutionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  beginDate: Date;

  @Column('date')
  endDate: Date;

  @Column()
  diagnosis: string;

  @Column()
  initialHealthStatus: number;

  @Column()
  currentHealthStatus: number;

  @Column()
  stringHealthStatus: string;

  @ManyToMany(() => DrugEntity)
  @JoinTable()
  recommendedDrugs: DrugEntity[];

  @ManyToOne(() => PatientEntity)
  @JoinColumn()
  patient: PatientEntity;
}
