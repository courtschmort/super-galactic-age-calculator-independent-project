export class Earthling {
  constructor(yearsOld, daysOld, yearsLifeExp, daysLifeExp) {
    this.yearsOld = yearsOld;
    this.daysOld = daysOld;
    this.yearsLifeExp = yearsLifeExp;
    this.daysLifeExp = daysLifeExp;
  }

  daysOldFunc() {
    const daysEarth = 365;
    let daysOld = this.yearsOld * daysEarth;
    return this.daysOld += daysOld;
  }

  mercury() {
    const daysMercury = 88;
    let yearsMercury = this.daysOldFunc(this.daysOld) / daysMercury;
    return yearsMercury;
  }

  venus() {
    const daysVenus = 225;
    let yearsVenus = this.daysOldFunc(this.daysOld) / daysVenus;
    return yearsVenus;
  }

  mars() {
    const daysMars = 687;
    let yearsMars = this.daysOldFunc(this.daysOld) / daysMars;
    return yearsMars;
  }

  jupiter() {
    const daysJupiter = 4380;
    let yearsJupiter = this.daysOldFunc(this.daysOld) / daysJupiter;
    return yearsJupiter;
  }

  daysLifeExpFunc() {
    const daysEarth = 365;
    let daysLifeExp = this.yearsLifeExp * daysEarth;
    return this.daysLifeExp += daysLifeExp;
  }

  mercuryRem() {
    const daysMercury = 88;
    let yearsMercuryRem = (this.daysLifeExpFunc(this.daysLifeExp) / daysMercury) - (this.daysOldFunc(this.daysOld) / daysMercury);
    return yearsMercuryRem;
  }

  venusRem() {
    const daysVenus = 225;
    let yearsVenusRem = (this.daysLifeExpFunc(this.daysLifeExp) / daysVenus) - (this.daysOldFunc(this.daysOld) / daysVenus);
    return yearsVenusRem;
  }

  marsRem() {
    // const daysMars = 687;
    // let yearsMarsRem = (this.daysLifeExpFunc(this.daysLifeExp) / daysMars) - (this.daysOldFunc(this.daysOld) / daysMars);
    // return yearsMarsRem;
  }
}
