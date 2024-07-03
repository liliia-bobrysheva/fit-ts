import { ANTNetwork, ANTPlusDeviceType, BatteryStatus, BodyLocation, Manufacturer, SourceType } from "./types";

export interface Device {
    timestamp: Date;
    device_index: number; // TODO - confirm type with documentation 
    device_type: ANTPlusDeviceType;
    manufacturer: Manufacturer;
    source_type?: SourceType;
    serial_number?: number;
    product?: number;
    software_version?: number;
    hardware_version?: number;
    cum_operating_time?: number;
    battery_voltage?: number;
    battery_status?: BatteryStatus;
    sensor_position?: BodyLocation;
    descriptor?: string;
    ant_transmission_type?: number;
    ant_device_number?: number;
    ant_network?: ANTNetwork;
    source_type?: SourceType;
    product_name?: string;
}