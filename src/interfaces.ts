import { CoursePoint, DeveloperDataId, Device, DiveGas, FitEvent, FieldDescription, FileId, FitBaseType, FitRecord, HRV, Lap, Length, Monitoring, MonitoringInfo, Session, Sport, StressLevel, Types } from "./messages";

export type SpeedUnit = "m/s" | "mph" | "km/h";
export type LengthUnit = "m" | "mi" | "km";
export type TemperatureUnit = "celsius" | "kelvin" | "fahrenheit";
export type PressureUnit = "cbar" | "bar" | "psi";

export type UnitSet= { [key: string]: Unit }

export type Options = {
  speedUnits: UnitSet;
  lengthUnits: UnitSet;
  temperatureUnits: UnitSet;
  pressureUnits: UnitSet;
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
  | "dive_summary"
  | "tank_update"
  | "tank_summary";

export interface MessageAttributes {
  field: AllTypes | string; // string is added here because custom fields with basic types are not present in AllTypes
  type: AllTypes;
  scale: number | null;
  offset: number;
  units: string;
}

export type AdditionalTypes = "date_time"
  | "local_date_time"
  | "uint32_array"
  | "uint16_array"
  | "byte_array"
  | "bool"
  | "device_index";

export type MessageDataTypeTMP = FitBaseType | AdditionalTypes;

export type AllTypes = FitBaseType | AdditionalTypes | keyof Types;

export type ParserMode = "cascade" | "list" | "both";

export interface ParserOptions {
  force: boolean;
  speedUnit: SpeedUnit;
  lengthUnit: LengthUnit;
  temperatureUnit: TemperatureUnit;
  elapsedRecordField: boolean;
  pressureUnit: PressureUnit;
  mode: ParserMode;
}

export interface FITObject {
  protocolVersion: number;
  profileVersion: number;
  software?: any; // TODO define
  // TODO check if we can predefine a prop for every MessageName type
  activity?: Activity;
  [key: string]: any; // TODO - get rid of it ASAP
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
  definitions?: FieldDescription[]; // TODO unclear what is the difference between field_descriptions and definitions
}

type FITObjectMix = FITObjectCascade & FITObjectList;

export interface FieldDefinition {
  type: AllTypes; // TODO check if FitBaseType | AdditionalTypes would be better
  fDefNo: number; // one of the keys of FIT.messages[x] object, e.g. for FIT.messages[2][7] it is 7
  size: number; // size of a field in bits
  endianAbility: boolean;
  littleEndian: boolean;
  baseTypeNo: number; // one of the keys of FIT.types.fit_base_type TODO - keys in fit.ts do not fully match documentation - need to investigate why
  name: string; // name of the field definition, e.g. FIT.messages[18][253].field = 'timestamp'
  dataType: number; // TODO check what is the difference between this field and baseTypeNo
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
  fieldDefs: FieldDefinition[],
};

export interface Record {
  messageType: MessageName | "definition", // TODO investigate value "definition" that is used in binary.ts method readRecord
  nextIndex: number,
  message?: any;
  /* TODO add type for message */
};

export interface DataItem {
  value: any;
  [key: number]: any;
}