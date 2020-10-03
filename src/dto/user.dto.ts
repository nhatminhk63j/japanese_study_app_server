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

@Exclude()
export class UserDto {
  @Expose()
  @IsNotEmpty()
  firstName: string

  @Expose()
  @IsNotEmpty()
  lastName: string

  @Expose()
  @IsNotEmpty()
  email: string

  @Expose()
  avatarUrl: string

  @Expose()
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean
}

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string

  @IsNotEmpty()
  lastName: string

  @IsNotEmpty()
  @IsEmail()
  @Validate(UniqueEmailValidator)
  email: string

  @IsNotEmpty()
  @Length(8, 24)
  password: string

  @IsNotEmpty()
  @Validate(PasswordConfirmValidator, ['password'])
  password_confirmation: string;

  avatarUrl: string

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean
}

export class UpdateUserDto {
  @IsOptional()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @Length(8, 24)
  password: string;

  @IsOptional()
  @IsNotEmpty()
  @Validate(PasswordConfirmValidator, ['password'])
  password_confirmation: string

  @IsOptional()
  avatarUrl: string

  @IsOptional()
  @IsBoolean()
  isActive: boolean
}
