import { getMessageName, getFieldObject } from './fit.js';
export function getFitMessage(messageNum) {
    return {
        name: getMessageName(messageNum),
        getAttributes: (fieldNum) => getFieldObject(fieldNum, messageNum),
    };
}
// TODO
export function getFitMessageBaseType(foo) {
    return foo;
}
//# sourceMappingURL=functions.js.map