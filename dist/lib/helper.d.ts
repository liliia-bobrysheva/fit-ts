import { ExtendedLap, FitRecord, Lap, Length, Session } from "./messages";
export declare const mapDataIntoLap: (inputLaps: ExtendedLap[], lapKey: "records" | "lengths", data: FitRecord[] | Length[]) => ExtendedLap[];
export declare const mapDataIntoSession: (inputSessions: Session[], laps: Lap[]) => Session[];
//# sourceMappingURL=helper.d.ts.map