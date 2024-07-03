import { DiveGasStatus, MessageIndex } from "./types"

export interface DiveGas {
    message_index?: MessageIndex;
    helium_content?: number;
    oxygen_content?: number;
    status?: DiveGasStatus;
}