import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';

import { AuthenticationInterceptor } from './authentication.interceptor';


@Controller('notes')
@UseInterceptors(AuthenticationInterceptor)
export class NotesController {

  @Post()
  async create(): Promise<any>{

  }

  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }
}
