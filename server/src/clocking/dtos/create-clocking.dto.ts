import { IsInt, IsObject, IsString } from 'class-validator';

export class CreateClockingDto {
  @IsInt()
  date: number;

  @IsString()
  in: string;

  @IsString()
  lunchStart: string;

  @IsString()
  lunchEnd: string;

  @IsString()
  out: string;

  @IsString()
  workedHours: string;

  @IsString()
  balance: string;

  @IsObject()
  config: {
    workloadHours: number;
  };
}
