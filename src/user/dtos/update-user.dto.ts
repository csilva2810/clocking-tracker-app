import { IsString, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UserConfig {
  @IsNumber()
  public workloadHours: number;
}

export class UpdateUserDto {
  @IsString({
    message: 'O campo "name" deve ser uma string',
  })
  public name: string;

  @IsString()
  public avatar: string;

  @ValidateNested()
  @Type(() => UserConfig)
  public config: UserConfig;
}
