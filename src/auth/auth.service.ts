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

  private generateToken(user: User): string {
    return this.jwtService.sign({
      email: user.email,
      sub: user._id,
    });
  }

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findOne(email);

    if (user) {
      const passwordCheck = await compare(pass, user.password);

      if (passwordCheck) {
        return user;
      }
    }

    return null;
  }

  authorize(user: User) {
    const token = this.generateToken(user);

    return this.userService.getPublicUserData(user, { token });
  }

  async signUp(signUpDto: SignUpDto) {
    const user = await this.userService.findOne(signUpDto.email);

    if (user) {
      throw new BadRequestException('Usuário já existe');
    }

    const encryptedPassword = await hash(signUpDto.password, 10);
    const newUser = await this.userService.create({
      ...signUpDto,
      password: encryptedPassword,
    });

    return this.authorize(newUser);
  }

  async getAuthenticatedUser(email: string) {
    const user = await this.userService.findOne(email);

    return this.userService.getPublicUserData(user);
  }
}
