import { Controller } from '@nestjs/common';
import { GrammarService } from './grammar.service';

@Controller('grammars')
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}
}
