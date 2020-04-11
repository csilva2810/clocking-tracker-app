import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Clocking } from './interfaces/clocking.interface';
import { CreateClockingDto } from './dtos/create-clocking.dto';
import { UpdateClockingDto } from './dtos/update-clocking.dto';

@Injectable()
export class ClockingService {
  constructor(
    @InjectModel('Clocking') private readonly clockingModel: Model<Clocking>,
  ) {}

  findAll(userId: string): Promise<Clocking[]> {
    return this.clockingModel.find({ usersId: userId }).exec();
  }

  async create(
    createClockingDto: CreateClockingDto,
    userId: string,
  ): Promise<Clocking> {
    return await this.clockingModel.create({
      ...createClockingDto,
      usersId: userId,
    });
  }

  async update(
    id: string,
    updateClockingDto: UpdateClockingDto,
    userId: string,
  ): Promise<Clocking> {
    const document = await this.clockingModel.findOne({
      _id: id,
      usersId: userId,
    });

    if (!document) {
      throw new NotFoundException(
        `Resource not found for the id: ${id}, user: ${userId}`,
      );
    }

    document.set(updateClockingDto);

    return await document.save();
  }
}
