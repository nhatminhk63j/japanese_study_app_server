import { Body, Controller, Post } from '@nestjs/common';
import { ListeningService } from './listening.service';
import { ListeningBulkCreate } from '../../dto/listening.dto';

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
}
