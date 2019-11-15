import { User } from "./../src/super-galactic-age-calculator.js";

describe("User", () => {
  test("should return person's age in Earth days", () => {
    let days = new User(30, 78);
    expect(days.calcYearsToDays()).toEqual(10950);
  });
})
