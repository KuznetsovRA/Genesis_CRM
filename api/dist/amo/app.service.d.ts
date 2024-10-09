import { AuthService } from '../auth/app.service';
export declare class AppService {
    private readonly authService;
    constructor(authService: AuthService);
    createEntity(entityType: string, data: any): Promise<number>;
}
