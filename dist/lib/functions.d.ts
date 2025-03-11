import { MessageAttributes, MessageName } from './interfaces';
interface FITMessageTMP {
    name: MessageName;
    getAttributes: (a: number) => MessageAttributes;
}
export declare function getFitMessage(messageNum: number): FITMessageTMP;
export declare function getFitMessageBaseType<T>(foo: T): T;
export {};
//# sourceMappingURL=functions.d.ts.map