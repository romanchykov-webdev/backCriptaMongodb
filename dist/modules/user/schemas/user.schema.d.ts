import mongoose, { Document } from "mongoose";
import { Watchlist } from "../../watchlist/schemas/watchlist.schema";
export type UserDocument = User & Document;
export declare class User {
    firstName: string;
    userName: string;
    email: string;
    password: string;
    watchlist: Watchlist[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}>;
