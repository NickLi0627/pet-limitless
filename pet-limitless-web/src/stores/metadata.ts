import { defineStore } from "pinia";
import type {
  GroupedCountyOptions,
  TownshipOption,
  HouseTypeOption,
  RoomNumberOption,
  RentOption,
} from "@/model/houseFilterOption";

export type MetadataState = {
  groupedCountyOptions: GroupedCountyOptions[];
  townshipOptions: TownshipOption[];
  houseTypeOptions: HouseTypeOption[];
  roomNumberOptions: RoomNumberOption[];
  rentOptions: RentOption[];
};

export const useMetadataStore = defineStore({
  id: "metadata",
  state: () =>
    ({
      groupedCountyOptions: [
        {
          regionId: "0",
          regionName: "北部",
          counties: [
            { id: "0", name: "台北市" },
            { id: "1", name: "新北市" },
            { id: "2", name: "桃園市" },
            { id: "3", name: "新竹市" },
            { id: "4", name: "新竹縣" },
            { id: "5", name: "宜蘭縣" },
            { id: "6", name: "基隆市" },
          ],
        },
        {
          regionId: "1",
          regionName: "中部",
          counties: [
            { id: "7", name: "台中市" },
            { id: "8", name: "彰化縣" },
            { id: "9", name: "雲林縣" },
            { id: "10", name: "苗栗縣" },
            { id: "11", name: "南投縣" },
          ],
        },
        {
          regionId: "2",
          regionName: "南部",
          counties: [
            { id: "12", name: "台南市" },
            { id: "13", name: "高雄市" },
            { id: "14", name: "嘉義市" },
            { id: "15", name: "嘉義縣" },
            { id: "16", name: "屏東縣" },
          ],
        },
        {
          regionId: "3",
          regionName: "東部",
          counties: [
            { id: "17", name: "台東縣" },
            { id: "18", name: "花蓮縣" },
            { id: "19", name: "澎湖縣" },
            { id: "20", name: "金門縣" },
            { id: "21", name: "連江縣" },
          ],
        },
      ],

      townshipOptions: [
        { id: "0", name: "信義區", countryId: "0" },
        { id: "1", name: "中山區", countryId: "0" },
        { id: "2", name: "大肚區", countryId: "0" },
        { id: "3", name: "北投區", countryId: "0" },
        { id: "4", name: "松山區", countryId: "0" },
        { id: "5", name: "內湖區", countryId: "0" },
        { id: "8", name: "北投區", countryId: "0" },
        { id: "9", name: "信義區2", countryId: "1" },
        { id: "10", name: "中山區2", countryId: "1" },
        { id: "11", name: "大肚區2", countryId: "1" },
        { id: "12", name: "北投區2", countryId: "1" },
        { id: "13", name: "松山區2", countryId: "1" },
        { id: "14", name: "內湖區2", countryId: "1" },
        { id: "15", name: "北投區2", countryId: "1" },
      ],

      houseTypeOptions: [
        { id: "0", name: "整層住家" },
        { id: "1", name: "獨立套房" },
        { id: "2", name: "分租套房" },
        { id: "3", name: "透天厝" },
        { id: "4", name: "雅房" },
      ],
      roomNumberOptions: [
        { id: "0", name: "1房" },
        { id: "1", name: "2房" },
        { id: "2", name: "3房" },
        { id: "3", name: "4房" },
        { id: "4", name: "5房以上" },
      ],
      rentOptions: [
        { id: "0", name: "5,000元以下" },
        { id: "1", name: "5,000-10,000元" },
        { id: "2", name: "10,000-10,000元" },
        { id: "3", name: "15,000-20,000元" },
        { id: "4", name: "20,000-30,000元" },
        { id: "5", name: "30,000-40,000元" },
        { id: "6", name: "40,000-60,000元" },
        { id: "7", name: "60,000元以上" },
      ],
    } as MetadataState),
  actions: {},
});
