import { UserService } from "./user.service";
import { UpdateUserDTO, UpdatePasswordDTO } from "./dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    updateUser(updateDTO: UpdateUserDTO, request: any): Promise<UpdateUserDTO>;
    updatePassword(updatePasswordDto: UpdatePasswordDTO, request: any): Promise<any>;
    deleteUser(request: any): Promise<boolean>;
}
