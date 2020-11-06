import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class BodyAuthDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export class BodyAuthSocialDto {
  @ApiProperty()
  @IsNotEmpty()
  accessToken: string;
}
