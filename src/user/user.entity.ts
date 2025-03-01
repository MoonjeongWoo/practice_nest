import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthDate: Date;

  @Column()
  phone: string;
}

export class CreateUserDto {
  name: string;
  email: string;
  birthDate: Date;
  phone: string;
}

export class UpdateUserDto {
  name?: string;
  email?: string;
  birthDate?: Date;
  phone?: string;
}

export class DeleteUserDto {
  name: string;
}

export class GetUserDto {
  name: string;
}

export class GetAllUsersDto {
  name: string;
}
