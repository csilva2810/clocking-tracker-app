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

  /**
   * Construct an user object only with attributes that can be publicly exposed
   */
  private getPublicUserData(
    user: User,
    aditionalData: Record<string, any> = {},
  ) {
    return {
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      config: user.config,
      ...aditionalData,
    };
  }

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
        return this.getPublicUserData(user);
      }
    }

    return null;
  }

  login(user: User) {
    const token = this.generateToken(user);

    return this.getPublicUserData(user, { token });
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

    return this.login(newUser);
  }

  async getAuthenticatedUser(email: string) {
    const user = await this.userService.findOne(email);

    return this.getPublicUserData(user);
  }
}
