export class User {
  constructor(age, avgLifeExp) {
    this.age = age;
    this.avgLifeExp = avgLifeExp;
  }

  calcYearsToDays() {
    let daysEarth = this.age * 365;
    return daysEarth;
  }

  calcMercury() {
    const daysMercury = 88;

  }

  calcVenus() {
    const daysVenus = 225;

  }

  calcMars() {
    const daysMars = 687;

  }

  calcJupiter() {
    const daysJupiter = 4380;

  }
}
