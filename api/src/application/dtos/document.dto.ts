import { IsEmail, IsNotEmpty, IsOptional, IsUUID } from 'class-validator'

export class CreateDocumentDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  status: string

  @IsNotEmpty()
  userId: string
}

export class UpdateDocumentDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  status: string
}

export class DocumentIdDto {
  @IsUUID()
  id: string
}
