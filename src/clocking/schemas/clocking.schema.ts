import * as mongoose from 'mongoose';

import { Clocking } from '../interfaces/clocking.interface';

export const ClockingSchema = new mongoose.Schema<Clocking>({
  date: {
    type: Date,
    required: true,
  },
  in: { type: String, default: '00:00' },
  lunchStart: { type: String, default: '00:00' },
  lunchEnd: { type: String, default: '00:00' },
  out: { type: String, default: '00:00' },
  workedHours: { type: String, default: '00:00' },
  balance: { type: String, default: '00:00' },
  config: {
    workloadHours: Number,
  },
  usersId: {
    type: String,
    required: true,
  },
});
