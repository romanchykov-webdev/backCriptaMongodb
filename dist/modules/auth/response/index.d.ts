declare class UserResponse {
    firstName: string;
    userName: string;
    email: string;
    password: string;
}
export declare class AuthUserResponse {
    user: UserResponse;
    token: string;
}
export {};
