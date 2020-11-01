import { UserDto } from './../../dto/user.dto';
import { plainToClass } from 'class-transformer';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserService } from './../users/user.service';
import { AuthService } from './auth.service';
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
} from '@nestjs/common';
import { AuthUser } from '../../decorators/auth.user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() request): Promise<{ accessToken: string }> {
    return this.authService.generateJwtToken(request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async myProfile(@Request() request, @AuthUser() authUser): Promise<any> {
    const user = await this.userService.findById(authUser.sub);

    return plainToClass(UserDto, user);
  }

  @Post('/login/google')
  async loginByGoogle(
    @Body() body: { accessToken: string },
  ): Promise<{ accessToken: string }> {
    const user = await this.authService.getUserByAccessTokenGoogle(
      body.accessToken,
    );

    return this.authService.generateJwtToken(user);
  }
}
