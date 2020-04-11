import { Controller, Patch, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/update-user.dto';

import { User } from './user.decotator';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Users can only update themselves, that's why we are getting the id from the token
  @Patch()
  async update(@Body() updateUserDto: UpdateUserDto, @User('_id') id: string) {
    return await this.userService.update(id, updateUserDto);
  }
}
