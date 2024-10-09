import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createEntity(body: {
        entityType: string;
        data: any;
    }): Promise<{
        id: any;
    } | {
        statusCode: number;
        message: string;
    }>;
}
