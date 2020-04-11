import { IsOptional, IsInt, IsObject, IsString } from 'class-validator';

export class UpdateClockingDto {
  @IsOptional()
  @IsInt()
  date: number;

  @IsOptional()
  @IsString()
  in: string;

  @IsOptional()
  @IsString()
  lunchStart: string;

  @IsOptional()
  @IsString()
  lunchEnd: string;

  @IsOptional()
  @IsString()
  out: string;

  @IsOptional()
  @IsString()
  workedHours: string;

  @IsOptional()
  @IsString()
  balance: string;

  @IsOptional()
  @IsObject()
  config: {
    workloadHours: number;
  };
}
