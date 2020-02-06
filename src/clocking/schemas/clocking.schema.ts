import * as mongoose from 'mongoose';

import { Clocking } from '../interfaces/clocking.interface';

export const ClockingSchema = new mongoose.Schema<Clocking>({
  date: {
    type: Date,
    unique: true,
  },
  in: Number,
  lunchStart: Number,
  lunchEnd: Number,
  out: Number,
  workedHours: Number,
  balance: Number,
  config: {
    workloadHours: Number,
  },
});
