import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isEqualPasswordField', async: false })
export class PasswordConfirmValidator implements ValidatorConstraintInterface {
  validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    return (
      value === validationArguments.object[validationArguments.constraints[0]]
    );
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property}" should be equal to "${validationArguments.constraints[0]}.`;
  }
}
