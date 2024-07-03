import {SportTypes, SubSport } from "./types"

export interface Sport {
    sport?: SportTypes;
    sub_sport?: SubSport;
    name?: string;
}