"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("./models/user.model");
const user_schema_1 = require("./schemas/user.schema");
const watchlist_model_1 = require("../watchlist/models/watchlist.model");
const watchlist_schema_1 = require("../watchlist/schemas/watchlist.schema");
const token_module_1 = require("../token/token.module");
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
//# sourceMappingURL=user.module.js.map