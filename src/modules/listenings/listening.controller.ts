import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ListeningService } from './listening.service';
import { ListeningBulkCreate, ListeningDto } from '../../dto/listening.dto';
import { plainToClass } from 'class-transformer';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Listening')
@Controller('listenings')
export class ListeningController {
  constructor(private readonly listeningService: ListeningService) {}

  @Post('/lessons')
  async bulkCreate(@Body() request: ListeningBulkCreate) {
    return this.listeningService.bulkCreate(
      request.lessonId,
      request.listenings,
    );
  }

  @Get('/lessons/:lessonId')
  async getListeningsByLessonId(
    @Param('lessonId') lessonId: string,
  ): Promise<ListeningDto[]> {
    const listenings = await this.listeningService.getListeningsByLessonId(
      parseInt(lessonId),
    );
    return plainToClass(ListeningDto, listenings);
  }

  @Get('/lessons/:lessonId/test')
  async test(): Promise<any> {
    return Promise.resolve();
  }
}
