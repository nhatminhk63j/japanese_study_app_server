import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GrammarService } from './grammar.service';
import { plainToClass } from 'class-transformer';
import { BulkCreateGrammar, GrammarDto } from '../../dto/grammar.dto';

@Controller('grammars')
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}

  @Get('/lessons/:lessonId')
  async getByLessonId(@Param('lessonId') lessonId: string) {
    const grammar = await this.grammarService.getByLessonId(parseInt(lessonId));
    return plainToClass(GrammarDto, grammar);
  }

  @Post('/lessons')
  async bulkCreateByLessonId(@Body() request: BulkCreateGrammar) {
    return this.grammarService.bulkCreateByLessonId(request.lessonId, request.grammars);
  }
}
