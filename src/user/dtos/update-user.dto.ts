import { IsString, IsObject, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({
    message: 'O campo "name" deve ser uma string',
  })
  name: string;

  @IsOptional()
  @IsString()
  avatar: string;

  @IsOptional()
  @IsObject()
  config: {
    workloadHours: number;
    theme: string;
  };
}
