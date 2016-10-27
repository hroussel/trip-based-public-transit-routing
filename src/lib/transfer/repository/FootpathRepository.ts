
import {Station, Stop} from "../../trip/Trip";

export type Duration = number;
export class FootpathNotFoundError extends Error {};

interface FootpathRepository {
    getConnectedStopsFor(stop: Stop): Stop[];
}

export default FootpathRepository;
