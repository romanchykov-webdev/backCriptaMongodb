"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
const bcrypt = require("bcrypt");
const token_service_1 = require("../token/token.service");
let UserService = class UserService {
    constructor(userModel, tokenService) {
        this.userModel = userModel;
        this.tokenService = tokenService;
    }
    async hashPassword(password) {
        return bcrypt.hash(password, 10);
    }
    async findUserByEmail(email) {
        return this.userModel.findOne({ email }).exec();
    }
    async findUserById(id) {
        return this.userModel.findById(id).exec();
    }
    async createUser(dto) {
        const hashedPassword = await this.hashPassword(dto.password);
        const newUser = new this.userModel({
            ...dto,
            password: hashedPassword
        });
        return newUser.save();
    }
    async publicUser(email) {
        const user = await this.userModel.findOne({ email }).select("-password").exec();
        const token = await this.tokenService.generationJwtToken({ id: user._id, email: user.email });
        return { user, token };
    }
    async updateUser(userId, dto) {
        return this.userModel.findByIdAndUpdate(userId, dto, { new: true }).exec();
    }
    async updatePassword(userId, dto) {
        const user = await this.findUserById(userId);
        const validatePassword = await bcrypt.compare(dto.oldPassword, user.password);
        if (!validatePassword) {
            throw new common_1.BadRequestException("Old password does not match.");
        }
        const hashedPassword = await this.hashPassword(dto.newPassword);
        return this.userModel.findByIdAndUpdate(userId, { password: hashedPassword }, { new: true }).exec();
    }
    async deleteUser(id) {
        await this.userModel.findByIdAndDelete(id).exec();
        return true;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        token_service_1.TokenService])
], UserService);
//# sourceMappingURL=user.service.js.map