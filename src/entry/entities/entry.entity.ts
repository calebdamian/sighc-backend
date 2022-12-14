import { IsInt, IsString } from 'class-validator';
import { DrugEntity } from 'src/drug/entities/drug.entity';
import { PatientEntity } from 'src/patient/entity/patient.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('entry')
export class EntryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  createdDate: Date;

  @Column()
  healthStatus: number;

  @Column()
  diagnosis: string;

  @IsString()
  @Column()
  comments: string;

  @ManyToOne(() => PatientEntity, (patient) => patient.medicalRecord, {
    eager: true,
    onDelete: 'CASCADE',
  })
  patient: PatientEntity;

  @ManyToMany(() => DrugEntity, { eager: true })
  @JoinTable()
  drugs: DrugEntity[];
}
