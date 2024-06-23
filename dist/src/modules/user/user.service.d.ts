import { Model } from "mongoose";
import { UserDocument } from "./schemas/user.schema";
import { CreateUserDTO, UpdateUserDTO, UpdatePasswordDTO } from "./dto";
import { AuthUserResponse } from "../auth/response";
import { TokenService } from "../token/token.service";
export declare class UserService {
    private userModel;
    private readonly tokenService;
    constructor(userModel: Model<UserDocument>, tokenService: TokenService);
    hashPassword(password: string): Promise<string>;
    findUserByEmail(email: string): Promise<UserDocument>;
    findUserById(id: string): Promise<UserDocument>;
    createUser(dto: CreateUserDTO): Promise<UserDocument>;
    publicUser(email: string): Promise<AuthUserResponse>;
    updateUser(userId: string, dto: UpdateUserDTO): Promise<UserDocument>;
    updatePassword(userId: string, dto: UpdatePasswordDTO): Promise<UserDocument>;
    deleteUser(id: string): Promise<boolean>;
}
