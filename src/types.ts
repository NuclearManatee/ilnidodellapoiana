
export type NavMenuOption = {
    name : string,
    icon : string,
    path : string
};

export type NavMenuOptions = NavMenuOption[];

export type Geo = {
    lat : number,
    lon : number
};

export type Photo = {
    name : string,
    alt : string,
    path : string
};

export type PhotoList = Photo[];