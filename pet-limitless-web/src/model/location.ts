export interface County {
  id: string;
  name: string;
}

export interface Township {
  id: string;
  name: string;
}

export interface Street {
  id: string;
  name: string;
}

export interface Location {
  county: County;
  township: Township;
  street: Street;
  lane?: string;
  alley?: string;
  number: number;
  minorNumber?: number;
  floor: number;
  minorFloor?: number;
  totalFloor: number;
}

function generateFakeCounties(): County[] {
  return [
    { id: "1", name: "台北市" },
    { id: "2", name: "桃園市" },
    { id: "4", name: "台南市" },
    { id: "3", name: "高雄市" },
    { id: "5", name: "新竹市" },
    { id: "1", name: "台北市" },
    { id: "5", name: "新竹市" },
    { id: "2", name: "桃園市" },
    { id: "2", name: "桃園市" },
    { id: "7", name: "花蓮市" },
  ];
}

function generateFakeTownships(): Township[] {
  return [
    { id: "1", name: "信義區" },
    { id: "2", name: "中山區" },
    { id: "3", name: "大肚區" },
    { id: "4", name: "北投區" },
    { id: "6", name: "松山區" },
    { id: "5", name: "內湖區" },
    { id: "1", name: "信義區" },
    { id: "5", name: "內湖區" },
    { id: "1", name: "信義區" },
    { id: "4", name: "北投區" },
  ];
}

function generateFakeStreets(): Street[] {
  return [
    { id: "2", name: "忠孝東路" },
    { id: "1", name: "民生東路" },
    { id: "2", name: "忠孝東路" },
    { id: "6", name: "新民街" },
    { id: "1", name: "民生東路" },
    { id: "2", name: "忠孝東路" },
    { id: "1", name: "民生東路" },
    { id: "4", name: "信義路" },
    { id: "5", name: "大道街" },
    { id: "4", name: "信義路" },
  ];
}

function generateRandomNumber(): number {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

export function generateFakeLocations(): Location[] {
  const counties = generateFakeCounties();
  const townships = generateFakeTownships();
  const streets = generateFakeStreets();

  const locations: Location[] = [];

  for (let i = 0; i < 10; ++i) {
    const location: Location = {
      county: counties[i],
      township: townships[i],
      street: streets[i],
      number: generateRandomNumber(),
      floor: generateRandomNumber(),
      totalFloor: generateRandomNumber(),
    };

    if (i % 2 == 0) {
      location.minorNumber = generateRandomNumber();
    }

    if (i % 3 == 0) {
      location.minorFloor = generateRandomNumber();
    }

    if (i % 4 == 0) {
      location.lane = generateRandomNumber().toString();
    }

    if (i % 5 == 0) {
      location.alley = generateRandomNumber().toString();
    }

    location.totalFloor = location.floor + 5;
    locations.push(location);
  }

  return locations;
}
