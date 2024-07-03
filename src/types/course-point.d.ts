import { CoursePointType, MessageIndex } from "./types"

export interface CoursePoint {
    message_index?: MessageIndex;
    timestamp?: Date;
    position_lat?: number;
    position_long?: number;
    distance?: number;
    type?: CoursePointType;
    name?: stringf;
    favorite?: boolean;

}