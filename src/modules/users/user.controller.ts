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
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Find all users.' })
  @ApiOkResponse({ type: [UserDto] })
  async index(): Promise<UserDto[]> {
    const users = await this.service.index();

    return plainToClass(UserDto, users);
  }

  @Get('/inactive')
  @ApiOperation({ summary: 'Find all users inactive.' })
  @ApiOkResponse({ type: [UserDto] })
  async getInactive(): Promise<UserDto[]> {
    const users = await this.service.getInactiveUsers();

    return plainToClass(UserDto, users);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get user by id.' })
  @ApiOkResponse({ type: UserDto })
  async show(@Param('id') id: EntityId): Promise<UserDto> {
    const user = await this.service.findById(id);
    if (!user) {
      throw new NotFoundException();
    }

    return plainToClass(UserDto, user);
  }

  @Post()
  @ApiOperation({ summary: 'Store new user.' })
  @ApiOkResponse({ type: UserDto })
  async store(@Body() user: CreateUserDto): Promise<UserDto> {
    const createdUser = await this.service.store(user);

    return plainToClass(UserDto, createdUser);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update user information by id.' })
  @ApiOkResponse({ type: UserDto })
  async update(
    @Param('id') id: EntityId,
    @Body() user: UpdateUserDto,
  ): Promise<UserDto> {
    const updatedUser = await this.service.update(id, user);

    return plainToClass(UserDto, updatedUser);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete a user by id.' })
  @ApiOkResponse({ type: DeleteResult })
  delete(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.service.delete(id);
  }
}
