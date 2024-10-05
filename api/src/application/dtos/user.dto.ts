import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsNotEmpty()
  name: string
}

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email: string

  @IsOptional()
  name: string
}
