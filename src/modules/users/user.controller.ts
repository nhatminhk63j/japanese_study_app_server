import { RolesGuard } from '../auth/guards/role.guard';
import { UserRole } from '../../db/entities/user.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserDto, CreateUserDto, UpdateUserDto } from '../../dto/user.dto';
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
  UseGuards,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { DeleteResult } from 'typeorm';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorators/role.decorator';

@ApiTags('Users')
@Controller('users')
// @UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Find all users.' })
  @ApiOkResponse({ type: [UserDto] })
  async index(): Promise<UserDto[]> {
    const users = await this.service.index();

    return plainToClass(UserDto, users);
  }

  @Get('/inactive')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Find all users inactive.' })
  @ApiOkResponse({ type: [UserDto] })
  async getInactive(): Promise<UserDto[]> {
    const users = await this.service.getInactiveUsers();

    return plainToClass(UserDto, users);
  }

  @Get('/:id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Get user by id.' })
  @ApiOkResponse({ type: UserDto })
  async show(@Param('id') id: EntityId): Promise<UserDto> {
    const user = await this.service.findById(id);
    if (!user) {
      throw new NotFoundException();
    }

    return plainToClass(UserDto, user);
  }

  @Post('/create')
  @Roles(UserRole.ADMIN)
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
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete a user by id.' })
  @ApiOkResponse({ type: DeleteResult })
  delete(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.service.delete(id);
  }
}
