import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';

import { ClockingService } from './clocking.service';
import { CreateClockingDto } from './dtos/create-clocking.dto';
import { UpdateClockingDto } from './dtos/update-clocking.dto';
import { Clocking } from './interfaces/clocking.interface';

@Controller('clocking')
export class ClockingController {
  constructor(private readonly clockingService: ClockingService) {}

  @Get()
  async findAll(): Promise<Clocking[]> {
    return this.clockingService.findAll();
  }

  @Post()
  async create(@Body() createClockingDto: CreateClockingDto): Promise<any> {
    return this.clockingService.create(createClockingDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClockingDto: UpdateClockingDto,
  ): Promise<Clocking> {
    return await this.clockingService.update(id, updateClockingDto);
  }
}
