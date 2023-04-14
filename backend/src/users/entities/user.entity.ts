import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { IsString, Length, IsEmail } from "class-validator";

@Entity({ name: "users" })
@Unique(["username", "email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 30 })
  @IsString()
  @Length(2, 30)
  username: string;

  @Column({ select: false })
  @IsEmail()
  email: string;

  @Column({ select: false })
  @IsString()
  password: string;

  @Column({ nullable: true, select: false })
  @IsString()
  refreshToken: string;
}
