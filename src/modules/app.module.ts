import { Module } from '@nestjs/common';
import { RedisModule } from './components/redis.module';

import { UsersController } from './controllers/users.controller';
import { NotesController } from './controllers/notes.controller';
import { AuthenticationInterceptor } from './controllers/authentication.interceptor';

@Module({
    modules: [RedisModule],
    controllers:[UsersController, NotesController]
})
export class ApplicationModule {}
