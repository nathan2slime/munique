import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'

export class CreateDocumentDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  status: string

  @IsNotEmpty()
  @IsUUID()
  userId: string
}

export class UpdateDocumentDto {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  status: string
}

export class DocumentIdDto {
  @IsUUID()
  id: string
}
