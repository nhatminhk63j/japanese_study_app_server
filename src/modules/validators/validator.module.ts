import { UserHttpModule } from './../users/http-user.module';
import { UniqueEmailValidator } from './email.validator';
import { PasswordConfirmValidator } from './password.validator';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [UserHttpModule],
  providers: [PasswordConfirmValidator, UniqueEmailValidator],
  exports: [PasswordConfirmValidator, UniqueEmailValidator],
})
export class ValidatorModule {}
