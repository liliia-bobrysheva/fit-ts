import { FIT } from './fit';
import { getFitMessage, getFitMessageBaseType } from './functions';
import { Buffer } from 'buffer';
import { AllTypes, DataItem, FieldDefinition, LengthUnit, MessageTypeDefinition, MessageDataTypeTMP, Options, ParserOptions, Record, SpeedUnit, TemperatureUnit, Unit, UnitSet, DeveloperDataFieldDefinition } from './interfaces';
import { FieldDescription, Types } from './messages';

export function addEndian(littleEndian: boolean, bytes: number[]): number | number[] {
    let result = 0;
    if (!littleEndian) bytes.reverse();
    for (let i = 0; i < bytes.length; i++) {
        result += (bytes[i] << (i << 3)) >>> 0;
    }

    return result;
}

var timestamp = 0;
var lastTimeOffset = 0;
const CompressedTimeMask = 31;
const CompressedLocalMesgNumMask = 0x60;
const CompressedHeaderMask = 0x80;
const GarminTimeOffset = 631065600000;
let monitoring_timestamp = 0;

function readData(blob: ArrayLike<number>, fDef: FieldDefinition, startIndex: number, options: ParserOptions): number | string | ArrayLike<number> {
    if (fDef.endianAbility === true) {
        const temp = [];
        for (let i = 0; i < fDef.size; i++) {
            temp.push(blob[startIndex + i]);
        }

        var buffer = new Uint8Array(temp).buffer;
        var dataView = new DataView(buffer);

        try {
            switch (fDef.type) {
                case 'sint16':
                    return dataView.getInt16(0, fDef.littleEndian);
                case 'uint16':
                case 'uint16z':
                    return dataView.getUint16(0, fDef.littleEndian);
                case 'sint32':
                    return dataView.getInt32(0, fDef.littleEndian);
                case 'uint32':
                case 'uint32z':
                    return dataView.getUint32(0, fDef.littleEndian);
                case 'float32':
                    return dataView.getFloat32(0, fDef.littleEndian);
                case 'float64':
                    return dataView.getFloat64(0, fDef.littleEndian);
                case 'uint32_array':
                    const array32 = [];
                    for (let i = 0; i < fDef.size; i += 4) {
                        array32.push(dataView.getUint32(i, fDef.littleEndian));
                    }
                    return array32;
                case 'uint16_array':
                    const array = [];
                    for (let i = 0; i < fDef.size; i += 2) {
                        array.push(dataView.getUint16(i, fDef.littleEndian));
                    }
                    return array;
            }
        }catch (e) {
            if (!options.force){
                throw e;
            }
        }

        return addEndian(fDef.littleEndian, temp);
    }

    if (fDef.type === 'string') {
        const temp = [];
        for (let i = 0; i < fDef.size; i++) {
            if (blob[startIndex + i]) {
                temp.push(blob[startIndex + i]);
            }
        }
        return Buffer.from(temp).toString('utf-8');
    }

    if (fDef.type === 'byte_array') {
        const temp = [];
        for (let i = 0; i < fDef.size; i++) {
            temp.push(blob[startIndex + i]);
        }
        return temp;
    }

    return blob[startIndex];
}

function formatByType(data: any, type: AllTypes, scale: number | null, offset: number): Date | number | Partial<DataItem> {
    switch (type) {
        case 'date_time':
        case 'local_date_time':
            return new Date((data * 1000) + GarminTimeOffset);
        case 'sint32':
            return data * FIT.scConst;
        case 'uint8':
        case 'sint16':
        case 'uint32':
        case 'uint16':
            return scale ? data / scale + offset : data;
        case 'uint32_array':
        case 'uint16_array':
            return data.map((dataItem: number) => scale ? dataItem / scale + offset : dataItem);
        default:
            if (!(type in FIT.types)) {
                return data;
            }
            // Quick check for a mask
            const typeObj = FIT.types[type as keyof Types];
            var values = [];
            for (var key in typeObj) {
                if (typeObj.hasOwnProperty(key)) {
                    values.push(typeObj[key])
                }
            }
            if (values.indexOf('mask') === -1){
                return typeObj[data];
            }
            var dataItem: Partial<DataItem> = {};
            for (let key in typeObj) {
                if (typeObj.hasOwnProperty(key)) {
                    if (typeObj[key] === 'mask'){
                        dataItem.value = data & parseInt(key)
                    }else{
                        dataItem[typeObj[key] as any] = !!((data & parseInt(key)) >> 7) // Not sure if we need the >> 7 and casting to boolean but from all the masked props of fields so far this seems to be the case
                    }
                }
            }
            return dataItem;
    }
}

function isInvalidValue(data: any, type: MessageDataTypeTMP | string): boolean {
    switch (type) {
        case 'enum':
            return data === 0xFF;
        case 'sint8':
            return data === 0x7F;
        case 'uint8':
            return data === 0xFF;
        case 'sint16':
            return data === 0x7FFF;
        case 'uint16':
            return data === 0xFFFF;
        case 'sint32':
            return data === 0x7FFFFFFF;
        case 'uint32':
            return data === 0xFFFFFFFF;
        case 'string':
            return data === 0x00;
        case 'float32':
            return data === 0xFFFFFFFF;
        case 'float64':
            return data === 0xFFFFFFFFFFFFFFFF;
        case 'uint8z':
            return data === 0x00;
        case 'uint16z':
            return data === 0x0000;
        case 'uint32z':
            return data === 0x000000;
        case 'byte':
            return data === 0xFF;
        case 'sint64':
            return data === 0x7FFFFFFFFFFFFFFF;
        case 'uint64':
            return data === 0xFFFFFFFFFFFFFFFF;
        case 'uint64z':
            return data === 0x0000000000000000;
        default:
            return false;
    }
}

function convertTo(data: any, unitsList: keyof Options, speedUnit: SpeedUnit | LengthUnit | TemperatureUnit): number {
    const unitSet = FIT.options[unitsList];
    const unitObj: Unit = unitSet[speedUnit as SpeedUnit | LengthUnit | TemperatureUnit];
    return unitObj ? data * unitObj.multiplier + unitObj.offset : data;
}

function applyOptions(data: any, field: string, options: ParserOptions) {
    switch (field) {
        case 'speed':
        case 'enhanced_speed':
        case 'vertical_speed':
        case 'avg_speed':
        case 'max_speed':
        case 'speed_1s':
        case 'ball_speed':
        case 'enhanced_avg_speed':
        case 'enhanced_max_speed':
        case 'avg_pos_vertical_speed':
        case 'max_pos_vertical_speed':
        case 'avg_neg_vertical_speed':
        case 'max_neg_vertical_speed':
            return convertTo(data, 'speedUnits', options.speedUnit);
        case 'distance':
        case 'total_distance':
        case 'enhanced_avg_altitude':
        case 'enhanced_min_altitude':
        case 'enhanced_max_altitude':
        case 'enhanced_altitude':
        case 'height':
        case 'odometer':
        case 'avg_stroke_distance':
        case 'min_altitude':
        case 'avg_altitude':
        case 'max_altitude':
        case 'total_ascent':
        case 'total_descent':
        case 'altitude':
        case 'cycle_length':
        case 'auto_wheelsize':
        case 'custom_wheelsize':
        case 'gps_accuracy':
            return convertTo(data, 'lengthUnits', options.lengthUnit);
        case 'temperature':
        case 'avg_temperature':
        case 'max_temperature':
            return convertTo(data, 'temperatureUnits', options.temperatureUnit);
        default:
            return data;
    }
}

export function readRecord(blob: Uint8Array, messageTypes: MessageTypeDefinition[], developerFields: FieldDescription[][], startIndex: number, options: ParserOptions, startDate: number, pausedTime: number): Record {
    const recordHeader = blob[startIndex];
    let localMessageType = recordHeader & 15;

    if((recordHeader & CompressedHeaderMask) === CompressedHeaderMask){
        //compressed timestamp

        var timeoffset = recordHeader & CompressedTimeMask;
        timestamp += ((timeoffset - lastTimeOffset) & CompressedTimeMask);
        lastTimeOffset = timeoffset;

        localMessageType = ((recordHeader & CompressedLocalMesgNumMask) >> 5);
    } else if ((recordHeader & 64) === 64) {
        // is definition message
        // startIndex + 1 is reserved

        const hasDeveloperData = (recordHeader & 32) === 32;
        const lEnd = blob[startIndex + 2] === 0;
        const numberOfFields = blob[startIndex + 5];
        const numberOfDeveloperDataFields = hasDeveloperData ? blob[startIndex + 5 + numberOfFields * 3 + 1] : 0;

        const mTypeDef: MessageTypeDefinition = {
            littleEndian: lEnd,
            globalMessageNumber: addEndian(lEnd, [blob[startIndex + 3], blob[startIndex + 4]]),
            numberOfFields: numberOfFields + numberOfDeveloperDataFields,
            fieldDefs: [],
        };

        const message = getFitMessage(mTypeDef.globalMessageNumber);

        for (let i = 0; i < numberOfFields; i++) {
            const fDefIndex = startIndex + 6 + (i * 3);
            const baseType = blob[fDefIndex + 2];
            const { field, type } = message.getAttributes(blob[fDefIndex]) || { field: null, type: null};
            const fDef: FieldDefinition = {
                type,
                fDefNo: blob[fDefIndex],
                size: blob[fDefIndex + 1],
                endianAbility: (baseType & 128) === 128,
                littleEndian: lEnd,
                baseTypeNo: (baseType & 15),
                name: field,
                dataType: getFitMessageBaseType(baseType & 15),
            };

            mTypeDef.fieldDefs.push(fDef);
        }

        // numberOfDeveloperDataFields = 0 so it wont crash here and wont loop
        for (let i = 0; i < numberOfDeveloperDataFields; i++) {
            // If we fail to parse then try catch
            try {
                const fDefIndex = startIndex + 6 + (numberOfFields * 3) + 1 + (i * 3);

                const fieldNum = blob[fDefIndex];
                const size = blob[fDefIndex + 1];
                const devDataIndex = blob[fDefIndex + 2];

                const devDef = developerFields[devDataIndex][fieldNum];

                const baseType = devDef.fit_base_type_id;

                const fDef: DeveloperDataFieldDefinition = {
                    type: FIT.types.fit_base_type[baseType],
                    fDefNo: fieldNum,
                    size: size,
                    endianAbility: (baseType & 128) === 128,
                    littleEndian: lEnd,
                    baseTypeNo: (baseType & 15),
                    name: devDef.field_name,
                    dataType: getFitMessageBaseType(baseType & 15),
                    scale: devDef.scale || 1,
                    offset: devDef.offset || 0,
                    developerDataIndex: devDataIndex,
                    isDeveloperField: true,
                };

                mTypeDef.fieldDefs.push(fDef);
            }catch (e) {
                if (options.force){
                    continue;
                }
                throw e;
            }
        }

        // TODO - investigate what localMessageType is. Apparently it is just a number type, but I'm not 100% sure that we don't need more elaborate type for it (LB)
        messageTypes[localMessageType] = mTypeDef;

        const nextIndex = startIndex + 6 + (mTypeDef.numberOfFields * 3);
        const nextIndexWithDeveloperData = nextIndex + 1;

        return {
            messageType: 'definition',
            nextIndex: hasDeveloperData ? nextIndexWithDeveloperData : nextIndex
        };
    }

    const messageType = messageTypes[localMessageType] || messageTypes[0];

    // TODO: handle compressed header ((recordHeader & 128) == 128)

    // uncompressed header
    let messageSize = 0;
    let readDataFromIndex = startIndex + 1;
    const fields: any = {}; // TODO any message field, e.g. for message type 'session' fields are time_in_power_zone, sport, sub_sport, intensity_factor, threshold_power etc.
    // unfortunately with current implementation of fit.ts I can't create more elaborate types, but will investigate if this is necessary and reaasonable (LB)
    const message = getFitMessage(messageType.globalMessageNumber);

    for (let i = 0; i < messageType.fieldDefs.length; i++) {
        const fDef: FieldDefinition = messageType.fieldDefs[i];
        const data = readData(blob, fDef, readDataFromIndex, options);

        if (!isInvalidValue(data, fDef.type)) {
            if (fDef.isDeveloperField) {

                const field = fDef.name;
                const type =  fDef.type;
                const scale = fDef.scale ?? null;
                const offset = fDef.offset ?? 0;

                fields[fDef.name] = applyOptions(formatByType(data, type, scale, offset), field, options);
            } else {
                const { field, type, scale, offset } = message.getAttributes(fDef.fDefNo) || { field: null, type: null };

                // TODO: investigate why this line works differently than in the original code (without null check)
                if (field !== 'unknown' && field !== '' && field !== undefined && field !== null) {
                //if (field !== 'unknown' && field !== '' && field !== undefined) {
                    fields[field] = applyOptions(formatByType(data, type, scale, offset), field, options);
                }
            }

            if (message.name === 'record' && options.elapsedRecordField) {
                fields.elapsed_time = (fields.timestamp - startDate) / 1000;
                fields.timer_time = fields.elapsed_time - pausedTime;
            }
        }

        readDataFromIndex += fDef.size;
        messageSize += fDef.size;
    }

    if (message.name === 'field_description') {
        developerFields[fields.developer_data_index] = developerFields[fields.developer_data_index] || [];
        developerFields[fields.developer_data_index][fields.field_definition_number] = fields;
    }

    if (message.name === 'monitoring') {
        //we need to keep the raw timestamp value so we can calculate subsequent timestamp16 fields
        if(fields.timestamp){
            monitoring_timestamp = fields.timestamp;
            fields.timestamp = new Date(fields.timestamp * 1000 + GarminTimeOffset);
        }
        if(fields.timestamp16 && !fields.timestamp){
            monitoring_timestamp += ( fields.timestamp16 - ( monitoring_timestamp & 0xFFFF ) ) & 0xFFFF;
            //fields.timestamp = monitoring_timestamp;
            fields.timestamp = new Date(monitoring_timestamp * 1000 + GarminTimeOffset);
        }
    }

    const result: Record = {
        messageType: message.name,
        nextIndex: startIndex + messageSize + 1,
        message: fields
    };

    return result;
}

export function getArrayBuffer(buffer: ArrayLike<number>): ArrayBuffer {
    if (buffer instanceof ArrayBuffer) {
        return buffer;
    }
    const ab = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}

export function calculateCRC(blob: ArrayLike<number>, start: number, end: number): number {
    const crcTable = [
        0x0000, 0xCC01, 0xD801, 0x1400, 0xF001, 0x3C00, 0x2800, 0xE401,
        0xA001, 0x6C00, 0x7800, 0xB401, 0x5000, 0x9C01, 0x8801, 0x4400,
    ];

    let crc = 0;
    for (let i = start; i < end; i++) {
        const byteVal = blob[i];
        let tmp = crcTable[crc & 0xF];
        crc = (crc >> 4) & 0x0FFF;
        crc = crc ^ tmp ^ crcTable[byteVal & 0xF];
        tmp = crcTable[crc & 0xF];
        crc = (crc >> 4) & 0x0FFF;
        crc = crc ^ tmp ^ crcTable[(byteVal >> 4) & 0xF];
    }

    return crc;
}
