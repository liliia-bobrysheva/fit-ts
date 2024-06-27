import { FitBaseType, Types } from "./types";

export type SpeedUnit = "m/s" | "mph" | "km/h";
export type LengthUnit = "m" | "mi" | "km";
export type TemperatureUnit = "°C" | "kelvin" | "fahrenheit";

export type UnitSet<T> = { [key: T]: Unit }

export type Options = {
  speedUnits: UnitSet<SpeedUnit>;
  lengthUnits: UnitSet<LengthUnit>;
  temperatureUnits: UnitSet<TemperatureUnit>;
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
  [key: number]: MessageField;
}

export type MessageName =
  | "file_id"
  | "capabilities"
  | "device_settings"
  | "user_profile"
  | "hrm_profile"
  | "sdm_profile"
  | "bike_profile"
  | "zones_target"
  | "hr_zone"
  | "power_zone"
  | "met_zone"
  | "sport"
  | "goal"
  | "session"
  | "lap"
  | "record"
  | "event"
  | "device_info"
  | "workout"
  | "workout_step"
  | "weight_scale"
  | "course"
  | "course_point"
  | "totals"
  | "activity"
  | "software"
  | "file_capabilities"
  | "mesg_capabilities"
  | "field_capabilities"
  | "file_creator"
  | "blood_pressure"
  | "monitoring"
  | "hrv"
  | "length"
  | "monitoring_info"
  | "o_hr_settings"
  | "field_description"
  | "developer_data_id"
  | "stress_level"
  | "dive_settings"
  | "dive_gas"
  | "dive_alarm"
  | "dive_summary";

export interface MessageField {
  field: string;
  type: string;
  scale: number | null | string; // TODO investigate why there are string values
  offset: number | string; // TODO confirm if string is really needed
  units: string;
}

export type AdditionalTypes = "date_time"
  | "local_date_time"
  | "uint32_array"
  | "uint16_array"
  | "byte_array";

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

export interface Activity {
  sessions: any;
  events: any;
  hrv: any;
  device_infos: any[];
  developer_data_ids: any[];
  field_descriptions: any[];
  sports: any[];
}

export interface FITObject {
  protocolVersion: number;
  profileVersion: number;
  software: any; // TODO define
  // TODO check if we need a prop for every MessageName type
}

export interface FITObjectCascade extends FITObject {
  activity: Activity;
}

export interface FITObjectList extends FITObject {
  sessions: any[];
  laps: any[];
  lengths: any[];
  records: any[];
  events: any[];
  device_infos: any[];
  developer_data_ids: any[];
  field_descriptions: any[];
  hrv: any[];
  dive_gases: any[];
  course_points: any[];
  sports: any[];
  devices: any[];
  monitors: any[];
  stress: any[];
  file_ids: any[];
  monitor_info: any[];
  definitions: any[];
}

type FITObjectMix = FITObjectCascade & FITObjectList;

export interface FieldDefinition {
  type: FitBaseType | AdditionalTypes;
  fDefNo: number; // one of the keys of FIT.messages[x] object, e.g. for FIT.messages[2][7] it is 7
  size: number; // size of a field in bits
  endianAbility: boolean;
  littleEndian: boolean;
  baseTypeNo: number; // one of the keys of FIT.types.fit_base_type TODO - keys in fit.ts do not fully match documentation - need to investigate why
  name: string; // name of the field definition, e.g. FIT.messages[18][253].field = 'timestamp'
  dataType: number; // TODO check what is the difference between this field and baseTypeNo
}

export interface DeveloperDataFieldDefinition extends FieldDefinition {
  scale: any;
  offset: any;
  developerDataIndex: any;
  isDeveloperField: any;
}

export interface MessageTypeDefinition {
  littleEndian: boolean;
  globalMessageNumber: any;
  numberOfFields: number;
  fieldDefs: FieldDefinition[],
};

export type FieldsTmp = "speed" | "enhanced_speed" | "vertical_speed" | "avg_speed" | "max_speed" | "speed_1s" | "ball_speed" | "enhanced_avg_speed" | "enhanced_max_speed"
| "avg_pos_vertical_speed" | "max_pos_vertical_speed" | "avg_neg_vertical_speed" | "max_neg_vertical_speed" | "distance" | "total_distance" | "enhanced_avg_altitude" | "enhanced_min_altitude"
| "enhanced_max_altitude" | "enhanced_altitude" | "height" | "odometer" | "avg_stroke_distance" | "min_altitude" | "avg_altitude" | "max_altitude" | "total_ascent" | "total_descent" 
| "altitude" | "cycle_length" | "auto_wheelsize" | "custom_wheelsize" | "gps_accuracy" | "temperature" | "avg_temperature" | "max_temperature" ;

export interface RecordTmp {
  messageType: MessageName | null,
  nextIndex: number,
  message: any;
};

export interface DataItem {
  value: any;
  [key: number]: any;
}