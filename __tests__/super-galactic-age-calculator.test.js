import { User } from "./../src/super-galactic-age-calculator.js";

describe("User", () => {
  test("should return person's age in Earth days", () => {
    let user = new User(30, 0, "");
    expect(user.calcYearsToDays()).toEqual(10950);
  });
  test("should return person's age in Mercury years", () => {
    let user = new User(30, 0, "");
    expect(Math.floor(user.calcMercury())).toEqual(124);
  });
  test("should return person's age in Venus years", () => {
    let user = new User(30, 0, "");
    expect(Math.floor(user.calcVenus())).toEqual(48);
  });
  test("should return person's age in Mars years", () => {
    let user = new User(30, 0, "");
    expect(Math.floor(user.calcMars())).toEqual(15);
  });
  test("should return person's age in Jupiter years", () => {
    let user = new User(30, 0, "");
    expect(Math.floor(user.calcJupiter())).toEqual(2);
  });
  test("should return how many years a user has left to live on Mercury", () => {
    let user = new User(30, 0, 78);
    expect(Math.floor(user.calcJupiterRem())).toEqual(199);
  });
})
