import { ActivityLevel, ActivitySubtype, ActivityType } from "./types"

export interface Monitoring {
    timestamp?: Date;
    device_index?: number; // TODO - confirm type with documentation
    calories?: number;
    distance?: number;
    cycles?: number;
    active_time?: number;
    activity_type?: ActivityType;
    activity_subtype?: ActivitySubtype;
    activity_level?: ActivityLevel;
    distance16?: number;
    cycles16?: number;
    active_time16?: number;
    local_timestamp?: Date;
    temperature?: number;
    temperature_min?: number;
    temperature_max?: number;
    activity_time?: number;
    active_calories?: number;
    current_activity_type_intensity?: number;
    timestamp_min8?: number;
    timestamp16?: number;
    heart_rate?: number;
    intensity?: number;
    duration_min?: number;
    duration?: number;
    ascent?: number;
    descent?: number;
    moderate_activity_minutes?: number;
    vigorous_activity_minutes?: number;
}