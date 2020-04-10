import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  /**
   * Construct an user object only with attributes that can be publicly exposed
   */
  getPublicUserData(user: User, aditionalData: Record<string, any> = {}) {
    return {
      id: user._id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      config: user.config,
      ...aditionalData,
    };
  }

  async findOne(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email }).exec();
  }

  async create(user: any): Promise<User> {
    const newUser = new this.userModel(user);

    return await newUser.save();
  }

  async update(id: string, data: any): Promise<any> {
    const user = await this.userModel.findOne({
      _id: id,
    });

    if (!user) {
      throw new NotFoundException(`Resource not found for the id: ${id}`);
    }

    user.set(data);

    await user.save();

    return this.getPublicUserData(user);
  }
}
