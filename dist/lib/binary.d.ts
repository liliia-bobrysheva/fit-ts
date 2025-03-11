import { MessageTypeDefinition, ParserOptions, Record } from './interfaces';
import { FieldDescription } from './messages';
export declare function addEndian(littleEndian: boolean, bytes: number[]): number | number[];
export declare function readRecord(blob: Uint8Array, messageTypes: MessageTypeDefinition[], developerFields: FieldDescription[][], startIndex: number, options: ParserOptions, startDate: number, pausedTime: number): Record;
export declare function getArrayBuffer(buffer: ArrayLike<number>): ArrayBuffer;
export declare function calculateCRC(blob: ArrayLike<number>, start: number, end: number): number;
//# sourceMappingURL=binary.d.ts.map