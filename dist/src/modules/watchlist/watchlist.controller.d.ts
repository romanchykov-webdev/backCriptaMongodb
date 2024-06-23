import { WatchlistService } from "./watchlist.service";
import { WatchlistDTO } from "./dto";
import { CreateAssetsResponse } from "./response";
import { Watchlist } from "./models/watchlist.model";
export declare class WatchlistController {
    private readonly watchlistService;
    constructor(watchlistService: WatchlistService);
    createAsset(assetDto: WatchlistDTO, request: any): Promise<CreateAssetsResponse>;
    getUserAssets(request: any): Promise<Watchlist[]>;
    deleteAsset(assetId: string, request: any): Promise<boolean>;
}
