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

  async findAll(): Promise<Clocking[]> {
    return this.clockingModel.find().exec();
  }

  async create(createClockingDto: CreateClockingDto): Promise<Clocking> {
    const createdClocking = new this.clockingModel({
      date: new Date(createClockingDto.date),
      ...createClockingDto,
    });

    return createdClocking.save();
  }

  async update(
    id: string,
    updateClockingDto: UpdateClockingDto,
  ): Promise<Clocking> {
    try {
      const document = await this.clockingModel.findById(id);

      document.set(updateClockingDto);

      return await document.save();
    } catch {
      throw new NotFoundException();
    }
  }
}
