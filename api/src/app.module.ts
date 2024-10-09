import { Module } from '@nestjs/common';
import { AppController } from './amo/app.controller';
import { AppService } from './amo/app.service';
import { AuthService } from './auth/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
