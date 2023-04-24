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
  @Length(2, 250)
  firstName: string;

  @Column()
  @IsString()
  @Length(2, 250)
  lastName: string;

  @Column({ nullable: true })
  @IsString()
  @Length(2, 250)
  middleName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  @IsString()
  @Length(2, 250)
  extraContacts: string;

  @Column("text")
  @IsString()
  @Length(2, 5000)
  appealText: string;

  @Column({ default: false })
  isProcessed: boolean;
}
