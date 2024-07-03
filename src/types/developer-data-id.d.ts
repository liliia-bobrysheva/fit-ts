import { Manufacturer } from "./types"

export interface DeveloperDataId {
    developer_id?: number;
    application_id?: number[]; // TODO confirm type for byte array
    manufacturer_id?: Manufacturer;
    developer_data_index: number;
    application_version?: number;
  }