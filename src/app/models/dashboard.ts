import { Type } from "@angular/core";

export interface Widget{
    id:number;
    label:string;
    content:Type<unknown>;
    rows?:number;
    column?:number;
    backgroundColor?:string;
    color?:string;
}