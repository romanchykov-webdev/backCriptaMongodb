import { Document, Types } from "mongoose";
export type WatchlistDocument = Watchlist & Document;
export declare class Watchlist {
    userId: Types.ObjectId;
    name: string;
    assetId: string;
}
export declare const WatchlistSchema: import("mongoose").Schema<Watchlist, import("mongoose").Model<Watchlist, any, any, any, Document<unknown, any, Watchlist> & Watchlist & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Watchlist, Document<unknown, {}, import("mongoose").FlatRecord<Watchlist>> & import("mongoose").FlatRecord<Watchlist> & {
    _id: Types.ObjectId;
}>;
