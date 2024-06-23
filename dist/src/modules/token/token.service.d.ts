import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class TokenService {
    private readonly jwtService;
    private readonly configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    generationJwtToken(user: any): Promise<string>;
}
