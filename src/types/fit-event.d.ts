export interface FitEvent {
    timestamp: Date;
    event: Event;
    event_type: EventType;
    data: number;
    data16?: number;
    event_group?: number;
    score?: number;
    opponent_score?: number;
    front_gear_num?: number;
    front_gear?: number;
    rear_gear_num?: number;
    rear_gear?: number;
    device_index?: number; // TODO - confirm type with documentation 
}