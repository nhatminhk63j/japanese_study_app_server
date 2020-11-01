import { CreateUserDto } from './../../dto/user.dto';
import { map } from 'rxjs/operators';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../users/user.service';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/db/entities/user.entity';
import * as bcrypt from 'bcrypt';
import fetch from 'node-fetch';

const GOOGLE_OAUTH_URL =
  'https://www.googleapis.com/oauth2/v2/userinfo?access_token=';
const FACEBOOK_OAUTH_URL = 'https://graph.facebook.com/me?access_token=';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Username or password is incorrect');
    }

    const compareResult = await bcrypt.compare(password, user.password);

    if (!compareResult) {
      throw new UnauthorizedException('Username or password is incorrect');
    }

    return user;
  }

  async generateJwtToken(user: User): Promise<{ accessToken: string }> {
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: this.configService.get<string>('jwtExpiresIn'),
      }),
    };
  }

  async getUserByAccessTokenGoogle(accessToken: string): Promise<User> {
    const endpointUrl = GOOGLE_OAUTH_URL + accessToken;
    const userGoogle: UserGoogle = await fetch(endpointUrl).then(res =>
      res.json(),
    );

    if ((userGoogle as any).error) {
      throw new UnauthorizedException('Access token is not valid');
    }

    const user = await this.userService.findByEmail(userGoogle.email);

    if (!user) {
      throw new NotFoundException('User is not exist');
    }

    return user;
  }
}

interface UserGoogle {
  id: string;
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
}
