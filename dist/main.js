/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const user_module_1 = __webpack_require__(7);
const auth_module_1 = __webpack_require__(26);
const config_1 = __webpack_require__(15);
const configurations_1 = __webpack_require__(34);
const user_model_1 = __webpack_require__(21);
const user_schema_1 = __webpack_require__(11);
const token_module_1 = __webpack_require__(25);
const watchlist_module_1 = __webpack_require__(36);
const watchlist_schema_1 = __webpack_require__(24);
const watchlist_model_1 = __webpack_require__(23);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configurations_1.default],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    uri: configService.get("MONGODB_URI"),
                }),
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: user_model_1.User.name, schema: user_schema_1.UserSchema },
                { name: watchlist_model_1.Watchlist.name, schema: watchlist_schema_1.WatchlistSchema },
            ]),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            token_module_1.TokenModule,
            watchlist_module_1.WatchlistModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(3);
let AppService = class AppService {
    getHello() {
        return "Hello Serioga!";
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(3);
const user_controller_1 = __webpack_require__(8);
const user_service_1 = __webpack_require__(9);
const mongoose_1 = __webpack_require__(4);
const user_model_1 = __webpack_require__(21);
const user_schema_1 = __webpack_require__(11);
const watchlist_model_1 = __webpack_require__(23);
const watchlist_schema_1 = __webpack_require__(24);
const token_module_1 = __webpack_require__(25);
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_model_1.User.name, schema: user_schema_1.UserSchema },
                { name: watchlist_model_1.Watchlist.name, schema: watchlist_schema_1.WatchlistSchema },
            ]),
            token_module_1.TokenModule,
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
    })
], UserModule);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(3);
const user_service_1 = __webpack_require__(9);
const dto_1 = __webpack_require__(16);
const jwt_guard_1 = __webpack_require__(19);
const swagger_1 = __webpack_require__(18);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    updateUser(updateDTO, request) {
        const user = request.user;
        return this.userService.updateUser(user.id, updateDTO);
    }
    updatePassword(updatePasswordDto, request) {
        const user = request.user;
        return this.userService.updatePassword(user.id, updatePasswordDto);
    }
    deleteUser(request) {
        const user = request.user;
        return this.userService.deleteUser(user.id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, swagger_1.ApiTags)("API"),
    (0, swagger_1.ApiResponse)({ status: 200, type: dto_1.UpdateUserDTO }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.UpdateUserDTO !== "undefined" && dto_1.UpdateUserDTO) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiTags)("API"),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Patch)("change-password"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.UpdatePasswordDTO !== "undefined" && dto_1.UpdatePasswordDTO) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserController.prototype, "updatePassword", null);
__decorate([
    (0, swagger_1.ApiTags)(),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(10);
const user_schema_1 = __webpack_require__(11);
const bcrypt = __webpack_require__(12);
const token_service_1 = __webpack_require__(13);
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
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof token_service_1.TokenService !== "undefined" && token_service_1.TokenService) === "function" ? _b : Object])
], UserService);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(10);
let User = class User {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: "Watchlist" }] }),
    __metadata("design:type", Array)
], User.prototype, "watchlist", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenService = void 0;
const common_1 = __webpack_require__(3);
const jwt_1 = __webpack_require__(14);
const config_1 = __webpack_require__(15);
let TokenService = class TokenService {
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async generationJwtToken(user) {
        const payload = { user };
        return this.jwtService.sign(payload, {
            secret: this.configService.get("secret_jwt"),
            expiresIn: this.configService.get("expire_jwt"),
        });
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], TokenService);


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePasswordDTO = exports.UpdateUserDTO = exports.CreateUserDTO = void 0;
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(18);
class CreateUserDTO {
}
exports.CreateUserDTO = CreateUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "password", void 0);
class UpdateUserDTO {
}
exports.UpdateUserDTO = UpdateUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDTO.prototype, "email", void 0);
class UpdatePasswordDTO {
}
exports.UpdatePasswordDTO = UpdatePasswordDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePasswordDTO.prototype, "oldPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePasswordDTO.prototype, "newPassword", void 0);


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const passport_1 = __webpack_require__(20);
const common_1 = __webpack_require__(3);
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)("jwt") {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const sequelize_typescript_1 = __webpack_require__(22);
const watchlist_model_1 = __webpack_require__(23);
let User = class User extends sequelize_typescript_1.Model {
};
exports.User = User;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => watchlist_model_1.Watchlist, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], User.prototype, "watchlist", void 0);
exports.User = User = __decorate([
    sequelize_typescript_1.Table
], User);


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("sequelize-typescript");

/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Watchlist = void 0;
const sequelize_typescript_1 = __webpack_require__(22);
const user_model_1 = __webpack_require__(21);
let Watchlist = class Watchlist extends sequelize_typescript_1.Model {
};
exports.Watchlist = Watchlist;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    __metadata("design:type", typeof (_a = typeof user_model_1.User !== "undefined" && user_model_1.User) === "function" ? _a : Object)
], Watchlist.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Watchlist.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Watchlist.prototype, "assetId", void 0);
exports.Watchlist = Watchlist = __decorate([
    sequelize_typescript_1.Table
], Watchlist);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WatchlistSchema = exports.Watchlist = void 0;
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(10);
const user_schema_1 = __webpack_require__(11);
let Watchlist = class Watchlist {
};
exports.Watchlist = Watchlist;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: user_schema_1.User.name, required: true }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], Watchlist.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Watchlist.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Watchlist.prototype, "assetId", void 0);
exports.Watchlist = Watchlist = __decorate([
    (0, mongoose_1.Schema)()
], Watchlist);
exports.WatchlistSchema = mongoose_1.SchemaFactory.createForClass(Watchlist);


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenModule = void 0;
const common_1 = __webpack_require__(3);
const token_service_1 = __webpack_require__(13);
const jwt_1 = __webpack_require__(14);
let TokenModule = class TokenModule {
};
exports.TokenModule = TokenModule;
exports.TokenModule = TokenModule = __decorate([
    (0, common_1.Module)({
        providers: [token_service_1.TokenService, jwt_1.JwtService],
        exports: [token_service_1.TokenService],
    })
], TokenModule);


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(3);
const auth_controller_1 = __webpack_require__(27);
const auth_service_1 = __webpack_require__(28);
const user_module_1 = __webpack_require__(7);
const token_module_1 = __webpack_require__(25);
const strategy_1 = __webpack_require__(32);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, token_module_1.TokenModule],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, strategy_1.JwtStrategy],
    })
], AuthModule);


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(28);
const dto_1 = __webpack_require__(16);
const dto_2 = __webpack_require__(30);
const response_1 = __webpack_require__(31);
const swagger_1 = __webpack_require__(18);
const user_service_1 = __webpack_require__(9);
const jwt_guard_1 = __webpack_require__(19);
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    register(dto) {
        return this.authService.registerUsers(dto);
    }
    login(dto) {
        return this.authService.loginUser(dto);
    }
    getPublicUserInfo(request) {
        const user = request.user;
        return this.userService.publicUser(user.email);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiTags)("API"),
    (0, swagger_1.ApiResponse)({ status: 201, type: dto_1.CreateUserDTO }),
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.CreateUserDTO !== "undefined" && dto_1.CreateUserDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthController.prototype, "register", null);
__decorate([
    (0, swagger_1.ApiTags)("API"),
    (0, swagger_1.ApiResponse)({ status: 200, type: response_1.AuthUserResponse }),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dto_2.UserLoginDTO !== "undefined" && dto_2.UserLoginDTO) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)("get-public-user-info"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getPublicUserInfo", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object])
], AuthController);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(3);
const user_service_1 = __webpack_require__(9);
const errors_1 = __webpack_require__(29);
const bcrypt = __webpack_require__(12);
const token_service_1 = __webpack_require__(13);
let AuthService = class AuthService {
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async registerUsers(dto) {
        try {
            const existUser = await this.userService.findUserByEmail(dto.email);
            if (existUser)
                throw new common_1.BadRequestException(errors_1.AppError.USER_EXIST);
            await this.userService.createUser(dto);
            return this.userService.publicUser(dto.email);
        }
        catch (error) {
            throw new common_1.BadRequestException(errors_1.AppError.USER_EXIST);
        }
    }
    async loginUser(dto) {
        try {
            const existUser = await this.userService.findUserByEmail(dto.email);
            if (!existUser)
                throw new common_1.BadRequestException(errors_1.AppError.USER_NOT_EXIST);
            const validatePassword = await bcrypt.compare(dto.password, existUser.password);
            if (!validatePassword)
                throw new common_1.BadRequestException(errors_1.AppError.WRONG_DATA);
            return this.userService.publicUser(dto.email);
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof token_service_1.TokenService !== "undefined" && token_service_1.TokenService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppError = void 0;
exports.AppError = {
    USER_EXIST: 'User with this email exist',
    USER_NOT_EXIST: 'User with this a,ail not exist',
    WRONG_DATA: 'Wrong data',
};


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserLoginDTO = void 0;
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(18);
class UserLoginDTO {
}
exports.UserLoginDTO = UserLoginDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserLoginDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserLoginDTO.prototype, "password", void 0);


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthUserResponse = void 0;
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(18);
class UserResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponse.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponse.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponse.prototype, "password", void 0);
class AuthUserResponse {
}
exports.AuthUserResponse = AuthUserResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", UserResponse)
], AuthUserResponse.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthUserResponse.prototype, "token", void 0);


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_1 = __webpack_require__(20);
const passport_jwt_1 = __webpack_require__(33);
const config_1 = __webpack_require__(15);
const common_1 = __webpack_require__(3);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get("secret_jwt"),
        });
        this.configService = configService;
    }
    async validate(payload) {
        return { ...payload.user };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const process = __webpack_require__(35);
exports["default"] = () => ({
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI,
    secret_jwt: process.env.SECRET,
    expire_jwt: process.env.EXPIRE_JWT
});


/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WatchlistModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const watchlist_controller_1 = __webpack_require__(37);
const watchlist_service_1 = __webpack_require__(38);
const watchlist_model_1 = __webpack_require__(23);
const watchlist_schema_1 = __webpack_require__(24);
let WatchlistModule = class WatchlistModule {
};
exports.WatchlistModule = WatchlistModule;
exports.WatchlistModule = WatchlistModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: watchlist_model_1.Watchlist.name, schema: watchlist_schema_1.WatchlistSchema },
            ]),
        ],
        controllers: [watchlist_controller_1.WatchlistController],
        providers: [watchlist_service_1.WatchlistService],
    })
], WatchlistModule);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WatchlistController = void 0;
const common_1 = __webpack_require__(3);
const watchlist_service_1 = __webpack_require__(38);
const dto_1 = __webpack_require__(39);
const jwt_guard_1 = __webpack_require__(19);
const response_1 = __webpack_require__(40);
const swagger_1 = __webpack_require__(18);
let WatchlistController = class WatchlistController {
    constructor(watchlistService) {
        this.watchlistService = watchlistService;
    }
    createAsset(assetDto, request) {
        const user = request.user;
        return this.watchlistService.createAsset(user, assetDto);
    }
    getUserAssets(request) {
        const user = request.user;
        return this.watchlistService.getUserAssets(user.id);
    }
    deleteAsset(assetId, request) {
        const { id } = request.user;
        return this.watchlistService.deleteAsset(id, assetId);
    }
};
exports.WatchlistController = WatchlistController;
__decorate([
    (0, swagger_1.ApiTags)("API"),
    (0, swagger_1.ApiResponse)({ status: 201, type: response_1.CreateAssetsResponse }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.WatchlistDTO !== "undefined" && dto_1.WatchlistDTO) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], WatchlistController.prototype, "createAsset", null);
__decorate([
    (0, swagger_1.ApiTags)("API"),
    (0, swagger_1.ApiResponse)({ status: 200, type: response_1.GetUserAssetsResponse }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)("get-elements"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], WatchlistController.prototype, "getUserAssets", null);
__decorate([
    (0, swagger_1.ApiTags)("API"),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], WatchlistController.prototype, "deleteAsset", null);
exports.WatchlistController = WatchlistController = __decorate([
    (0, common_1.Controller)("watchlist"),
    __metadata("design:paramtypes", [typeof (_a = typeof watchlist_service_1.WatchlistService !== "undefined" && watchlist_service_1.WatchlistService) === "function" ? _a : Object])
], WatchlistController);


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WatchlistService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(10);
const watchlist_model_1 = __webpack_require__(23);
let WatchlistService = class WatchlistService {
    constructor(watchlistModel) {
        this.watchlistModel = watchlistModel;
    }
    async createAsset(user, dto) {
        try {
            const newAsset = new this.watchlistModel({
                userId: user.id,
                name: dto.name,
                assetId: dto.assetId,
            });
            await newAsset.save();
            return newAsset;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async getUserAssets(userId) {
        try {
            return await this.watchlistModel.find({ userId: userId }).exec();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteAsset(userId, assetId) {
        try {
            const result = await this.watchlistModel
                .deleteOne({ _id: assetId, userId: userId })
                .exec();
            return result.deletedCount > 0;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
exports.WatchlistService = WatchlistService;
exports.WatchlistService = WatchlistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(watchlist_model_1.Watchlist.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], WatchlistService);


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WatchlistDTO = void 0;
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(18);
class WatchlistDTO {
}
exports.WatchlistDTO = WatchlistDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WatchlistDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WatchlistDTO.prototype, "assetId", void 0);


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetUserAssetsResponse = exports.CreateAssetsResponse = void 0;
const class_validator_1 = __webpack_require__(17);
const swagger_1 = __webpack_require__(18);
class CreateAssetsResponse {
}
exports.CreateAssetsResponse = CreateAssetsResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAssetsResponse.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAssetsResponse.prototype, "assetId", void 0);
class GetUserAssetsResponse {
}
exports.GetUserAssetsResponse = GetUserAssetsResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetUserAssetsResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUserAssetsResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUserAssetsResponse.prototype, "assetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUserAssetsResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUserAssetsResponse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetUserAssetsResponse.prototype, "userId", void 0);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const config_1 = __webpack_require__(15);
const swagger_1 = __webpack_require__(18);
const common_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'https://cryptocurrency-front-end-fb4n.vercel.app',
            'https://crypto-mu-eight.vercel.app',
            'http://romancf5.beget.tech',
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'Authorization',
            'x-custom-header',
        ],
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API testing documentation')
        .setDescription('This API is for testing documentation')
        .setVersion('1.0')
        .addTag('API')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('port');
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();

})();

/******/ })()
;