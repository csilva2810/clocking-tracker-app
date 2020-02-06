import { IsOptional, IsInt, IsObject } from 'class-validator';

export class UpdateClockingDto {
  @IsOptional()
  @IsInt()
  date: number;

  @IsOptional()
  @IsInt()
  in: number;

  @IsOptional()
  @IsInt()
  lunchStart: number;

  @IsOptional()
  @IsInt()
  lunchEnd: number;

  @IsOptional()
  @IsInt()
  out: number;

  @IsOptional()
  @IsInt()
  workedHours: number;

  @IsOptional()
  @IsInt()
  balance: number;

  @IsOptional()
  @IsObject()
  config: {
    workloadHours: number;
  };
}
