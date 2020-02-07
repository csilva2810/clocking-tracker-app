import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from 'bcrypt';

import { UserService } from '../user/user.service';

import { SignUpDto } from './dtos/sign-up.dto';
import { User } from 'src/user/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);

    if (user) {
      const passwordCheck = await compare(pass, user.password);

      if (passwordCheck) {
        return user;
      }
    }

    return null;
  }

  async login(user: User) {
    const payload = {
      email: user.email,
      sub: user._id,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async signUp(signUpDto: SignUpDto) {
    const user = await this.userService.findOne(signUpDto.email);

    if (user) {
      throw new BadRequestException('Usuário já existe');
    }

    const encryptedPassword = await hash(signUpDto.password, 10);
    const newUser = await this.userService.create({
      email: signUpDto.email,
      password: encryptedPassword,
    });

    return await this.login(newUser);
  }
}
