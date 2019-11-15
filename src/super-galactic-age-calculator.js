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
    let yearsVenus = this.calcYearsToDays(this.daysOld) / daysVenus;
    return yearsVenus;
  }

  calcMars() {
    const daysMars = 687;
    let yearsMars = this.calcYearsToDays(this.daysOld) / daysMars;
    return yearsMars;
  }

  calcJupiter() {
    const daysJupiter = 4380;
    let yearsJupiter = this.calcYearsToDays(this.daysOld) / daysJupiter;
    return yearsJupiter;
  }
}
