import { CoursePoint, DeveloperDataId, Device, DiveGas, FitEvent, FieldDescription, FileId, FitBaseType, FitRecord, HRV, Lap, Length, Monitoring, MonitoringInfo, Session, Sport, StressLevel, Types } from "./messages";
export type SpeedUnit = "m/s" | "mph" | "km/h";
export type LengthUnit = "m" | "mi" | "km";
export type TemperatureUnit = "celsius" | "kelvin" | "fahrenheit";
export type UnitSet = {
    [key: string]: Unit;
};
export type Options = {
    speedUnits: UnitSet;
    lengthUnits: UnitSet;
    temperatureUnits: UnitSet;
};
export interface Unit {
    multiplier: number;
    offset: number;
}
export interface FITInterface {
    scConst: number;
    options: Options;
    types: Types;
    messages: {
        [key: number]: Message;
    };
}
export interface Message {
    name: MessageName;
    [key: number]: MessageAttributes;
}
export type MessageName = "file_id" | "capabilities" | "device_settings" | "user_profile" | "hrm_profile" | "sdm_profile" | "bike_profile" | "zones_target" | "hr_zone" | "power_zone" | "met_zone" | "sport" | "goal" | "session" | "lap" | "record" | "event" | "device_info" | "workout" | "workout_step" | "weight_scale" | "course" | "course_point" | "totals" | "activity" | "software" | "file_capabilities" | "mesg_capabilities" | "field_capabilities" | "file_creator" | "blood_pressure" | "monitoring" | "hrv" | "length" | "monitoring_info" | "o_hr_settings" | "field_description" | "developer_data_id" | "stress_level" | "dive_settings" | "dive_gas" | "dive_alarm" | "dive_summary";
export interface MessageAttributes {
    field: AllTypes | string;
    type: AllTypes;
    scale: number | null;
    offset: number;
    units: string;
}
export type AdditionalTypes = "date_time" | "local_date_time" | "uint32_array" | "uint16_array" | "byte_array" | "bool" | "device_index";
export type MessageDataTypeTMP = FitBaseType | AdditionalTypes;
export type AllTypes = FitBaseType | AdditionalTypes | keyof Types;
export type ParserMode = "cascade" | "list" | "both";
export interface ParserOptions {
    force: boolean;
    speedUnit: SpeedUnit;
    lengthUnit: LengthUnit;
    temperatureUnit: TemperatureUnit;
    elapsedRecordField: boolean;
    mode: ParserMode;
}
export interface FITObject {
    protocolVersion: number;
    profileVersion: number;
    software?: any;
    activity?: Activity;
    [key: string]: any;
}
export interface FITObjectCascade extends FITObject {
    activity: Activity;
}
export interface Activity {
    sessions?: Session[];
    events?: FitEvent[];
    hrv?: HRV[];
    device_infos?: Device[];
    developer_data_ids?: DeveloperDataId[];
    field_descriptions?: FieldDescription[];
    sports?: Sport[];
}
export interface FITObjectList extends FITObject {
    sessions?: Session[];
    laps?: Lap[];
    lengths?: Length[];
    records?: FitRecord[];
    events?: FitEvent[];
    device_infos?: Device[];
    developer_data_ids?: DeveloperDataId[];
    field_descriptions?: FieldDescription[];
    hrv?: HRV[];
    dive_gases?: DiveGas[];
    course_points?: CoursePoint[];
    sports?: Sport[];
    devices?: Device[];
    monitors?: Monitoring[];
    stress?: StressLevel[];
    file_ids?: FileId[];
    monitor_info?: MonitoringInfo[];
    definitions?: FieldDescription[];
}
export interface FieldDefinition {
    type: AllTypes;
    fDefNo: number;
    size: number;
    endianAbility: boolean;
    littleEndian: boolean;
    baseTypeNo: number;
    name: string;
    dataType: number;
    isDeveloperField?: boolean;
    scale?: number | null;
    offset?: number | null;
}
export interface DeveloperDataFieldDefinition extends FieldDefinition {
    scale?: number | null;
    offset?: number | null;
    developerDataIndex: any;
    isDeveloperField: boolean;
}
export interface MessageTypeDefinition {
    littleEndian: boolean;
    globalMessageNumber: any;
    numberOfFields: number;
    fieldDefs: FieldDefinition[];
}
export interface Record {
    messageType: MessageName | "definition";
    nextIndex: number;
    message?: any;
}
export interface DataItem {
    value: any;
    [key: number]: any;
}
//# sourceMappingURL=interfaces.d.ts.map