export class User {
  constructor(yearsOld, daysOld, avgLifeExp) {
    this.yearsOld = yearsOld;
    this.daysOld = daysOld;
    this.avgLifeExp = avgLifeExp;
  }

  calcYearsToDays() {
    let daysOld = this.yearsOld * 365;
    return this.daysOld += daysOld;
  }

  calcMercury() {
    const daysMercury = 88;
    let yearsMercury = this.calcYearsToDays(this.daysOld) / daysMercury;
    return yearsMercury;
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
