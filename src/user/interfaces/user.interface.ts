import { Document } from 'mongoose';

export interface UserConfig {
  workloadHours: number;
}

export interface User extends Document {
  password: string;
  email: string;
  name?: string;
  avatar?: string;
  config: UserConfig;
}
