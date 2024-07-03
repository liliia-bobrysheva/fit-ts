import { FitEvent } from "./fit-event"
import { Event, EventType, LengthType, MessageIndex, SwimStroke } from "./types"

export interface Length {
    message_index?: MessageIndex;
    timestamp?: Date;
    event?: FitEvent;
    event_type?: EventType;
    start_time?: Date;
    total_elapsed_time?: number;
    total_timer_time?: number;
    total_strokes?: number;
    avg_speed?: number;
    swim_stroke?: SwimStroke;
    avg_swimming_cadence?: number;
    event_group?: number;
    total_calories?: number;
    length_type?: LengthType;
    player_score?: number;
    opponent_score?: number;
    stroke_count?: number;
    zone_count?: number;
}