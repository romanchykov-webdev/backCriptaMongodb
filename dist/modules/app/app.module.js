"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("../user/user.module");
const auth_module_1 = require("../auth/auth.module");
const config_1 = require("@nestjs/config");
const configurations_1 = require("../../configurations");
const user_model_1 = require("../user/models/user.model");
const user_schema_1 = require("../user/schemas/user.schema");
const token_module_1 = require("../token/token.module");
const watchlist_module_1 = require("../watchlist/watchlist.module");
const watchlist_schema_1 = require("../watchlist/schemas/watchlist.schema");
const watchlist_model_1 = require("../watchlist/models/watchlist.model");
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
//# sourceMappingURL=app.module.js.map