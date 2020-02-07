import * as mongoose from 'mongoose';

import { User } from '../interfaces/user.interface';

export const UserSchema = new mongoose.Schema<User>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: { type: String, default: '' },
  gender: { type: String, default: '' },
  avatar: { type: String, default: '' },
});
