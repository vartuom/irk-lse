import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsEmail, IsString, Length } from "class-validator";

@Entity({ name: "appeals" })
export class Appeal {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @IsString()
  @Length(2)
  appealerName: string;

  @Column()
  @IsEmail()
  appealerEmail: string;

  @Column("text")
  @Length(2)
  appealText: string;

  @Column("text")
  @Length(2)
  extras: string;

  @Column({ default: false })
  isProcessed: boolean;
}
