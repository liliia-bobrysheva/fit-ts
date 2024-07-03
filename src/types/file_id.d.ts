import { File, Manufacturer } from "./types"

export interface FileId {
    type?: File;
    manufacturer?: Manufacturer;
    product?: number;
    serial_number?: number;
    time_created?: Date;
    number?: number;
    product_name?: string;
}