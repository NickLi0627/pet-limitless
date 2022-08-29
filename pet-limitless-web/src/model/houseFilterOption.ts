export interface CountyOption {
  id: string;
  name: string;
}
export interface GroupedCountyOptions {
  regionId: string;
  regionName: string;
  counties: CountyOption[];
}

export interface TownshipOption {
  id: string;
  name: string;
  countryId: string;
}

export interface HouseTypeOption {
  id: string;
  name: string;
}

export interface RoomNumberOption {
  id: string;
  name: string;
}

export interface RentOption {
  id: string;
  name: string;
}
