import { UserRole } from './../db/entities/user.entity';
import { PasswordConfirmValidator } from './../modules/validators/password.validator';
import { UniqueEmailValidator } from './../modules/validators/email.validator';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Length,
  Validate,
} from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class UserDto {
  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @Expose()
  avatarUrl: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  role: UserRole;
}

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @Validate(UniqueEmailValidator)
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  avatarUrl: string;

  @ApiProperty({ required: false })
  @IsOptional()
  isActive: boolean;
}

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  firstName: string;

  @ApiProperty()
  @IsOptional()
  lastName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  avatarUrl: string;

  @ApiProperty({ required: false })
  @IsOptional()
  isActive: boolean;
}
