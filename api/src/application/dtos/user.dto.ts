import { IsEmail, IsNotEmpty, IsOptional, IsUUID } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  name: string
}

export class UpdateUserDto {
  @IsOptional()
  name: string
}

export class UserIdDto {
  @IsUUID()
  id: string
}

