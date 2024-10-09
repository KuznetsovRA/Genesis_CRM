import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
  private readonly clientId = '31992158';

  async getAccessToken(): Promise<{ accessToken: string; baseDomain: string }> {
    try {
      const response = await axios.get('https://app2.gnzs.ru/amocrm/test/oauth/get-token.php', {
        headers: {
          'X-Client-Id': this.clientId,
          'Content-Type': 'application/json',
        },
      });
      const { access_token, base_domain } = response.data;
      return { accessToken: access_token, baseDomain: base_domain };
    } catch (error) {
      throw new HttpException('Не удалось получить токен доступа', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
