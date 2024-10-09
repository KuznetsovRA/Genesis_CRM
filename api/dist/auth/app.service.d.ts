export declare class AuthService {
    private readonly clientId;
    getAccessToken(): Promise<{
        accessToken: string;
        baseDomain: string;
    }>;
}
