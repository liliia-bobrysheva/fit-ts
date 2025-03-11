import { Buffer } from 'buffer';
import { ParserOptions } from './interfaces';
import { FITObject } from './interfaces';
export default class FitParser {
    options: ParserOptions;
    constructor(options?: Partial<ParserOptions>);
    parse(content: Buffer, callback: (error: string | null, data: FITObject | {}) => void): void;
}
//# sourceMappingURL=fit-parser.d.ts.map