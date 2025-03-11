import { getMessageName, getFieldObject } from './fit';
import { MessageAttributes, MessageName } from './interfaces';

interface FITMessageTMP {
  name: MessageName;
  getAttributes: (a: number) => MessageAttributes
}

export function getFitMessage(messageNum: number): FITMessageTMP {
  return {
    name: getMessageName(messageNum),
    getAttributes: (fieldNum: number) => getFieldObject(fieldNum, messageNum),
  };
}

// TODO
export function getFitMessageBaseType<T>(foo: T): T {
  return foo;
}
