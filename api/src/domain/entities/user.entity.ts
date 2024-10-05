import { IsEmail, IsNotEmpty } from 'class-validator'

export class User {
  @IsEmail()
  email: string

  @IsNotEmpty()
  name: string
}
