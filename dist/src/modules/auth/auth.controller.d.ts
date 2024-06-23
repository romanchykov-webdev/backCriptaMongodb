import { AuthService } from "./auth.service";
import { CreateUserDTO } from "../user/dto";
import { UserLoginDTO } from "./dto";
import { AuthUserResponse } from "./response";
import { UserService } from "../user/user.service";
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    register(dto: CreateUserDTO): Promise<AuthUserResponse>;
    login(dto: UserLoginDTO): Promise<AuthUserResponse>;
    getPublicUserInfo(request: any): Promise<AuthUserResponse>;
}
