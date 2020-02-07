import { Document } from 'mongoose';

export interface User extends Document {
  password: string;
  email: string;
  name?: string;
  gender?: string;
  avatar?: string;
}
