import { IdType } from "vis-network";
import { DataType } from "./enums/DataType";

export class Data {
    readonly id: IdType;
    readonly label: string;
    readonly type: DataType;
    readonly link?: Data;

    constructor(
        id: IdType,
        label: string,
        type: DataType,
        link?: Data,
    ) {
        this.id = id;
        this.label = label;
        this.type = type;
        this.link = link;
    }
}
