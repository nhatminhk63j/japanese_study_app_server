import { UserService } from './../users/user.service';
import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isEmailUnique', async: true })
@Injectable()
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(value: any): Promise<boolean> {
    const user = await this.userService.findByEmail(value);
    return !user;
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return `${validationArguments.value} is taken, please try another`;
  }
}
