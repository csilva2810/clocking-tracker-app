import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
  Headers,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/sign-up.dto';
import { User } from 'src/user/user.decotator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  async user(@User('email') email, @Headers('authorization') token: string) {
    const user = await this.authService.getAuthenticatedUser(email);

    return {
      ...user,
      token: token.replace('Bearer ', ''),
    };
  }
}
