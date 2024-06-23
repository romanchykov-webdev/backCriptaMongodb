import { Model } from "sequelize-typescript";
import { User } from "../../user/models/user.model";
export declare class Watchlist extends Model {
    userId: User;
    name: string;
    assetId: string;
}
