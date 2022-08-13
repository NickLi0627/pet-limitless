import type { Location } from "./location";

import { generateFakeLocations } from "./location";

export interface BuildingType {
  id: string;
  name: string;
}

export interface HouseType {
  id: string;
  name: string;
}

export interface House {
  title: string;
  houseType: HouseType;
  buildingType: BuildingType;
  location: Location;

  // TODO(Nick): Optimize these fields
  size: number; // 房屋大小, unit: 坪
  rent: number; // 租金 / 月

  imgUrls: string[];
  modified: Date;
}

function generateRandomNumber(): number {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

function generateRandomDate(): Date {
  return new Date();
}

export function generateFakeHouses(): House[] {
  const titles: string[] = [
    "近捷運北門站。黃金店面。空間可營登",
    "美國學校獨棟電梯美裝透天",
    "中山捷運高貴美妝宅全新家電家具有電梯",
    "南京忠孝復興雙捷運、三面採光大空間/旅館",
    "陽明春曉透天-車庫-天母西路中山北路六段",
    "合家歡透天-車庫-天母東路中山北路七段",
    "至善路泳池美墅",
    "稀有釋出~依山傍水透天泳池別墅",
    "南港稀有透天別墅有保全管理",
    "天母必租獨棟電梯透天",
  ];

  const houseTypes: HouseType[] = [
    { id: "1", name: "分租套房" },
    { id: "2", name: "獨立套房" },
    { id: "4", name: "整層住家" },
    { id: "2", name: "獨立套房" },
    { id: "3", name: "雅房" },
    { id: "4", name: "整層住家" },
    { id: "1", name: "分租套房" },
    { id: "2", name: "獨立套房" },
    { id: "3", name: "透天厝" },
    { id: "4", name: "整層住家" },
  ];

  const buildingTypes: BuildingType[] = [
    { id: "1", name: "公寓" },
    { id: "3", name: "透天厝" },
    { id: "2", name: "電梯大樓" },
    { id: "1", name: "公寓" },
    { id: "1", name: "公寓" },
    { id: "3", name: "透天厝" },
    { id: "4", name: "別墅" },
    { id: "2", name: "電梯大樓" },
    { id: "1", name: "公寓" },
    { id: "4", name: "別墅" },
  ];

  const locations: Location[] = generateFakeLocations();

  const houses: House[] = [];
  for (let i = 0; i < 10; ++i) {
    const house: House = {
      title: titles[i],
      houseType: houseTypes[i],
      buildingType: buildingTypes[i],
      location: locations[i],
      size: generateRandomNumber(),
      rent: generateRandomNumber(),

      imgUrls: [
        `../../src/assets/fake/house-${i + 1}-1.png`,
        `../../src/assets/fake/house-${i + 1}-2.png`,
        `../../src/assets/fake/house-${i + 1}-3.png`,
        `../../src/assets/fake/house-${i + 1}-4.png`,
        `../../src/assets/fake/house-${i + 1}-5.png`,
      ],
      modified: generateRandomDate(),
    };

    houses.push(house);
  }

  return houses;
}
