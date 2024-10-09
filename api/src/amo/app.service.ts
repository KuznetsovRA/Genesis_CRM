import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import { AuthService } from '../auth/app.service';

@Injectable()
export class AppService {
  constructor(private readonly authService: AuthService) {}

  async createEntity(entityType: string, data: any): Promise<number> {
    try {
      const { accessToken, baseDomain } = await this.authService.getAccessToken();
      const url = `https://${baseDomain}/api/v4/${entityType}`;
      console.log(entityType);
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(JSON.stringify(response.data._embedded[entityType]));
      return response.data._embedded[entityType][0].id;
    } catch (error) {
      throw new HttpException('Не удалось создать сущность', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
