import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findOne(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email });
  }

  async create(user: any) {
    const newUser = new this.userModel(user);

    return await newUser.save();
  }
}
