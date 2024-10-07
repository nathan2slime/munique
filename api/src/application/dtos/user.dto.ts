import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  name: string
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name: string
}

export class UserIdDto {
  @IsUUID()
  id: string
}

