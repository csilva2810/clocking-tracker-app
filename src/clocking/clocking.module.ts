import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from '../auth/auth.module';

import { ClockingController } from './clocking.controller';
import { ClockingSchema } from './schemas/clocking.schema';
import { ClockingService } from './clocking.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Clocking', schema: ClockingSchema }]),
    AuthModule,
  ],
  controllers: [ClockingController],
  providers: [ClockingService],
})
export class ClockingModule {}
