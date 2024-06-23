import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "../user/user.module";
import { AuthModule } from "../auth/auth.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configurations from "../../configurations";

import { User } from "../user/models/user.model";
import { UserSchema } from "../user/schemas/user.schema";
import { TokenModule } from "../token/token.module";
import { WatchlistModule } from "../watchlist/watchlist.module";
import { WatchlistSchema } from "../watchlist/schemas/watchlist.schema";
import { Watchlist } from "../watchlist/models/watchlist.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>("MONGODB_URI"),
      }),
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Watchlist.name, schema: WatchlistSchema },
    ]),
    UserModule,
    AuthModule,
    TokenModule,
    WatchlistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
