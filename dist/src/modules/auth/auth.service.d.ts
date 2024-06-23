import { UserService } from "../user/user.service";
import { CreateUserDTO } from "../user/dto";
import { UserLoginDTO } from "./dto";
import { TokenService } from "../token/token.service";
import { AuthUserResponse } from "./response";
export declare class AuthService {
    private readonly userService;
    private readonly tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    registerUsers(dto: CreateUserDTO): Promise<AuthUserResponse>;
    loginUser(dto: UserLoginDTO): Promise<AuthUserResponse>;
}
