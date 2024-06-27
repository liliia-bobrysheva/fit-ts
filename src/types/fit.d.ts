import { Types } from "./types";

export type SpeedUnit = "m/s" | "mph" | "km/h";
export type LengthUnit = "m" | "mi" | "km";
export type TemperatureUnit = "°C" | "kelvin" | "fahrenheit";

export type Options = {
  speedUnits: { [key: SpeedUnit]: Unit };
  lengthUnits: { [key: LengthUnit]: Unit };
  temperatureUnits: { [key: TemperatureUnit]: Unit };
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
