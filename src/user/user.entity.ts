import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//Entity: 여기에서는 데이터베이스 테이블을 정의하는 역할을 한다.
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
