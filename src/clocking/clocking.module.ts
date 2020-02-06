import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClockingController } from './clocking.controller';
import { ClockingSchema } from './schemas/clocking.schema';
import { ClockingService } from './clocking.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Clocking', schema: ClockingSchema }]),
  ],
  controllers: [ClockingController],
  providers: [ClockingService],
})
export class ClockingModule {}
