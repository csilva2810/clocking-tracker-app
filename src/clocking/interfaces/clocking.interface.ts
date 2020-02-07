import { Document } from 'mongoose';

export interface Clocking extends Document {
  date: Date;
  in: number;
  lunchStart: number;
  lunchEnd: number;
  out: number;
  workedHours: number;
  balance: number;
  config: {
    workloadHours: number;
  };
  usersId: string;
}
