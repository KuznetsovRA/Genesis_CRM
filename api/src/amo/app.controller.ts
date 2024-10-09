import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  async createEntity(@Body() body: { entityType: string; data: any }): Promise<{ id: any } | { statusCode: number; message: string }> {
    try {
      const entityId = await this.appService.createEntity(body.entityType, body.data);
      return { id: entityId };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    }
  }
}
