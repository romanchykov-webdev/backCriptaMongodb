import { Model } from "sequelize-typescript";
import { Watchlist } from "../../watchlist/models/watchlist.model";
export declare class User extends Model {
    firstName: string;
    userName: string;
    email: string;
    password: string;
    watchlist: Watchlist[];
}
