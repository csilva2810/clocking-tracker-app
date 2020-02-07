import * as mongoose from 'mongoose';

import { Clocking } from '../interfaces/clocking.interface';

export const ClockingSchema = new mongoose.Schema<Clocking>({
  date: {
    type: Date,
    required: true,
  },
  in: { type: Number, default: 0 },
  lunchStart: { type: Number, default: 0 },
  lunchEnd: { type: Number, default: 0 },
  out: { type: Number, default: 0 },
  workedHours: { type: Number, default: 0 },
  balance: { type: Number, default: 0 },
  config: {
    workloadHours: Number,
  },
  usersId: {
    type: String,
    required: true,
  },
});
