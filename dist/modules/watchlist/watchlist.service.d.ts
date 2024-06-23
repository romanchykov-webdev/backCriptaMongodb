import { Model } from "mongoose";
import { Watchlist } from "./models/watchlist.model";
import { WatchlistDocument } from "./schemas/watchlist.schema";
import { CreateAssetsResponse } from "./response";
export declare class WatchlistService {
    private watchlistModel;
    constructor(watchlistModel: Model<WatchlistDocument>);
    createAsset(user: any, dto: any): Promise<CreateAssetsResponse>;
    getUserAssets(userId: string): Promise<Watchlist[]>;
    deleteAsset(userId: string, assetId: string): Promise<boolean>;
}
