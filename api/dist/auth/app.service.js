"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AuthService = class AuthService {
    constructor() {
        this.clientId = '31992158';
    }
    async getAccessToken() {
        try {
            const response = await axios_1.default.get('https://app2.gnzs.ru/amocrm/test/oauth/get-token.php', {
                headers: {
                    'X-Client-Id': this.clientId,
                    'Content-Type': 'application/json',
                },
            });
            const { access_token, base_domain } = response.data;
            return { accessToken: access_token, baseDomain: base_domain };
        }
        catch (error) {
            throw new common_1.HttpException('Не удалось получить токен доступа', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=app.service.js.map