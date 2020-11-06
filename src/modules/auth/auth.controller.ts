import { BodyAuthDto, BodyAuthSocialDto } from './../../dto/auth.dto';
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
import { ApiBody, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  @ApiOperation({ summary: 'Get me.' })
  @ApiBody({ type: BodyAuthDto })
  @ApiOkResponse({ type: BodyAuthSocialDto })
  async myProfile(@Request() request, @AuthUser() authUser): Promise<any> {
    const user = await this.userService.findById(authUser.sub);

    return plainToClass(UserDto, user);
  }

  @Post('/login/google')
  @ApiOperation({ summary: 'Login by google.' })
  @ApiBody({ type: BodyAuthSocialDto })
  @ApiOkResponse({ type: BodyAuthSocialDto })
  async loginByGoogle(
    @Body() body: { accessToken: string },
  ): Promise<{ accessToken: string }> {
    const user = await this.authService.getUserByAccessTokenGoogle(
      body.accessToken,
    );

    return this.authService.generateJwtToken(user);
  }

  @Post('/login/facebook')
  @ApiOperation({ summary: 'Login by facebook.' })
  @ApiBody({ type: BodyAuthSocialDto })
  @ApiOkResponse({ type: BodyAuthSocialDto })
  async loginByFacebook(
    @Body() body: { accessToken: string },
  ): Promise<{ accessToken: string }> {
    const user = await this.authService.getUserByAccessTokenFacebook(
      body.accessToken,
    );

    return this.authService.generateJwtToken(user);
  }
}
