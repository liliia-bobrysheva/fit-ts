import { ActivityType } from "./types"

export interface MonitoringInfo {
    timestamp?: Date;
    local_timestamp: Date;
    activity_type?: ActivityType;
    cycles_to_distance?: number;
    cycles_to_calories?: number;
    resting_metabolic_rate?: number;
}