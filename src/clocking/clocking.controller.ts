import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { User } from '../user/user.decotator';

import { ClockingService } from './clocking.service';
import { CreateClockingDto } from './dtos/create-clocking.dto';
import { UpdateClockingDto } from './dtos/update-clocking.dto';
import { Clocking } from './interfaces/clocking.interface';

@UseGuards(AuthGuard('jwt'))
@Controller('/clockings')
export class ClockingController {
  constructor(private readonly clockingService: ClockingService) {}

  @Get()
  findAll(@User('_id') userId: string): Promise<Clocking[]> {
    return this.clockingService.findAll(userId);
  }

  @Post()
  create(
    @Body() createClockingDto: CreateClockingDto,
    @User('_id') userId: string,
  ): Promise<any> {
    return this.clockingService.create(createClockingDto, userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClockingDto: UpdateClockingDto,
    @User('_id') userId: string,
  ): Promise<Clocking> {
    return this.clockingService.update(id, updateClockingDto, userId);
  }
}
