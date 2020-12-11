import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { BulkCreateGrammar, GrammarDto } from '../../dto/grammar.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reading')
@Controller('Reading')
export class ReadingController {

  @Get('/lessons/:lessonId')
  async getByLessonId(@Param('lessonId') lessonId: string) {
    // const grammar = await this.grammarService.getByLessonId(parseInt(lessonId));
    // return plainToClass(GrammarDto, grammar);
  }

  @Post('/lessons')
  async bulkCreateByLessonId(@Body() request: BulkCreateGrammar) {
    // return this.grammarService.bulkCreateByLessonId(request.lessonId, request.grammars);
  }

  @Get('/lessons/:lessonId/test')
  test() {
    return null
  }
}
