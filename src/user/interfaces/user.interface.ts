import { Document } from 'mongoose';

export interface UserConfig {
  workloadHours: number;
}

export interface User extends Document {
  _id: string;
  password: string;
  email: string;
  name?: string;
  avatar?: string;
  config: UserConfig;
}
