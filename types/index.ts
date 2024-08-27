import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomFilterProps{
    title?: string;
    options:OptionProps[];
};

export interface OptionProps{
    title:string;
    value:string;
};

export interface SearchManufacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void;
};

export interface CarProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
};

export interface FilterProps{
    manufacturer: string;
    limit: number;
    fuel: string;
    year: number;
    model: string;
};

export interface ShowMoreProps {
    isNext?:boolean;
    pageNumber:number;
};