import { Earthling } from "./../src/super-galactic-age-calculator.js";

describe("Earthling", () => {
  test("should return person's age in Earth days", () => {
    let earthling = new Earthling(30, 0, "", "");
    expect(earthling.daysOldFunc()).toEqual(10950);
  });
  test("should return person's age in Mercury years", () => {
    let earthling = new Earthling(30, 0, "", "");
    expect(Math.floor(earthling.mercury())).toEqual(124);
  });
  test("should return person's age in Venus years", () => {
    let earthling = new Earthling(30, 0, "", "");
    expect(Math.floor(earthling.venus())).toEqual(48);
  });
  test("should return person's age in Mars years", () => {
    let earthling = new Earthling(30, 0, "", "");
    expect(Math.floor(earthling.mars())).toEqual(15);
  });
  test("should return person's age in Jupiter years", () => {
    let earthling = new Earthling(30, 0, "", "");
    expect(Math.floor(earthling.jupiter())).toEqual(2);
  });
  test("should return how many years a user has left to live on Mercury", () => {
    let earthling = new Earthling(30, 0, 78, 0);
    expect(Math.floor(earthling.mercuryRem())).toEqual(199);
  });
  test("should return how many years a user has left to live on Venus", () => {
    let earthling = new Earthling(30, 0, 78, 0);
    expect(Math.floor(earthling.venusRem())).toEqual(77);
  });
  test("should return how many years a user has left to live on Mars", () => {
    let earthling = new Earthling(30, 0, 78, 0);
    expect(Math.floor(earthling.marsRem())).toEqual(25);
  });
  test("should return how many years a user has left to live on Jupiter", () => {
    let earthling = new Earthling(30, 0, 78, 0);
    expect(Math.floor(earthling.jupiterRem())).toEqual(4);
  });
  test("should return how many years a user has left to live on Jupiter", () => {
    let earthling = new Earthling(93, 0, 78, 0);
    expect(Math.floor(earthling.earthRem())).toEqual(15);
  });
})
