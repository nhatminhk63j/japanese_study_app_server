import { UserDto, CreateUserDto, UpdateUserDto } from './../../dto/user.dto';
import { UserService } from './user.service';
import { EntityId } from 'typeorm/repository/EntityId';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { DeleteResult } from 'typeorm';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async index(): Promise<UserDto[]> {
    const users = await this.service.index();

    return plainToClass(UserDto, users);
  }

  @Get('/inactive')
  async getInactive(): Promise<UserDto[]> {
    const users = await this.service.getInactiveUsers();

    return plainToClass(UserDto, users);
  }

  @Get('/:id')
  async show(@Param('id') id: EntityId): Promise<UserDto> {
    const user = await this.service.findById(id);
    if (!user) {
      throw new NotFoundException();
    }

    return plainToClass(UserDto, user);
  }

  @Post()
  async store(@Body() user: CreateUserDto): Promise<UserDto> {
    const createdUser = await this.service.store(user);

    return plainToClass(UserDto, createdUser);
  }

  @Put('/:id')
  async update(
    @Param('id') id: EntityId,
    @Body() user: UpdateUserDto,
  ): Promise<UserDto> {
    const updatedUser = await this.service.update(id, user);

    return plainToClass(UserDto, updatedUser);
  }

  @Delete('/:id')
  delete(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.service.delete(id);
  }
}
