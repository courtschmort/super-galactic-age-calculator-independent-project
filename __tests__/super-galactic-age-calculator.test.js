import { User } from "./../src/super-galactic-age-calculator.js";

describe("User", () => {
  test("should return person's age in Earth days", () => {
    let daysEarth = new User(30, 78);
    expect(daysEarth.calcYearsToDays()).toEqual(10950);
  });
  test("should return person's age in Mercury years", () => {
    let ageMercury = new User(30, 78);
    expect(ageMercury.calcMercury()).toEqual(124);
  });
})
