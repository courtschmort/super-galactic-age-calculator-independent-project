export class User {
  constructor(ageYears, ageDays, avgLifeExp) {
    this.ageYears = ageYears;
    this.ageDays = 0;
    this.avgLifeExp = avgLifeExp;
  }

  calcYearsToDays() {
    let daysEarth = this.ageYears * 365;
    return this.ageDays += daysEarth;
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
