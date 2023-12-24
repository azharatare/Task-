import { dataType } from "../enums/data.enum";

export interface data {    
    color: string,
    capacity: string,
    price: number,
    Generation: string,
    year: number,
    Description: string
}

export type dataModel =  {
    [key in dataType] :string;
} & data
