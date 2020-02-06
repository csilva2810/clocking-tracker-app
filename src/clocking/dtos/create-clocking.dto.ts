import { IsInt, IsObject } from 'class-validator';

export class CreateClockingDto {
  @IsInt()
  date: number;

  @IsInt()
  in: number;

  @IsInt()
  lunchStart: number;

  @IsInt()
  lunchEnd: number;

  @IsInt()
  out: number;

  @IsInt()
  workedHours: number;

  @IsInt()
  balance: number;

  @IsObject()
  config: {
    workloadHours: number;
  };
}
