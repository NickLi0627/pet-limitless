export interface Roommate {
  name: string;
  gender: string;
  age: string;
  city: string;
  photoUrl: string;
}

// TODO(Nick): replace with the real API call.
export function generateFakeRoommates(): Roommate[] {
  const fakeData: Roommate[] = [];
  for (let i = 1; i < 10; ++i) {
    const item: Roommate = {
      name: `Fake data ${i}`,
      age: "This is the fake description, use many words to test the ui add more text to make sure the UI still looks very good...",
      photoUrl: "../../src/assets/fake/fake-roommate.png",
      city: "fake city",
      gender: "Female",
    };
    fakeData.push(item);
  }
  return fakeData;
}
