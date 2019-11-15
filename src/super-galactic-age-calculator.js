export class Earthling {
  constructor(yearsOld, daysOld, yearsLifeExp, daysLifeExp) {
    this.yearsOld = yearsOld;
    this.daysOld = daysOld;
    this.yearsLifeExp = yearsLifeExp;
    this.daysLifeExp = daysLifeExp;
  }

  daysOldFunc() {
    const earthDaysInYear = 365;
    let daysOld = this.yearsOld * earthDaysInYear;
    return this.daysOld += daysOld;
  }

  mercury() {
    const mercuryDaysInYear = 88;
    let mercuryYears = this.daysOldFunc(this.daysOld) / mercuryDaysInYear;
    return mercuryYears;
  }

  venus() {
    const venusDaysInYear = 225;
    let venusYears = this.daysOldFunc(this.daysOld) / venusDaysInYear;
    return venusYears;
  }

  mars() {
    const marsDaysInYear = 687;
    let marsYears = this.daysOldFunc(this.daysOld) / marsDaysInYear;
    return marsYears;
  }

  jupiter() {
    const jupiterDaysInYear = 4380;
    let yearsJupiter = this.daysOldFunc(this.daysOld) / jupiterDaysInYear;
    return yearsJupiter;
  }

  daysLifeExpFunc() {
    const earthDaysInYear = 365;
    let daysLifeExp = this.yearsLifeExp * earthDaysInYear;
    return this.daysLifeExp += daysLifeExp;
  }

  earthRem() {
    const earthDaysInYear = 365;
    if (this.yearsOld < this.yearsLifeExp) {
      let earthYearsLeft = (this.daysLifeExpFunc(this.daysLifeExp) / earthDaysInYear) - (this.daysOldFunc(this.daysOld) / earthDaysInYear);
      return earthYearsLeft;
    } else {
      let earthExtraYears = (this.daysOldFunc(this.daysOld) / earthDaysInYear) - (this.daysLifeExpFunc(this.daysLifeExp) / earthDaysInYear);
      return earthExtraYears;
    }
  }

  mercuryRem() {
    const mercuryDaysInYear = 88;
    if (this.yearsOld < this.yearsLifeExp) {
      let mercuryYearsLeft = (this.daysLifeExpFunc(this.daysLifeExp) / mercuryDaysInYear) - (this.daysOldFunc(this.daysOld) / mercuryDaysInYear);
      return mercuryYearsLeft;
    } else {
      let mercuryExtraYears = (this.daysOldFunc(this.daysOld) / mercuryDaysInYear) - (this.daysLifeExpFunc(this.daysLifeExp) / mercuryDaysInYear);
      return mercuryExtraYears;
    }
  }

  venusRem() {
    const venusDaysInYear = 225;
    if (this.yearsOld < this.yearsLifeExp) {
      let venusYearsLeft = (this.daysLifeExpFunc(this.daysLifeExp) / venusDaysInYear) - (this.daysOldFunc(this.daysOld) / venusDaysInYear);
      return venusYearsLeft;
    } else {
      let venusExtraYears = (this.daysOldFunc(this.daysOld) / venusDaysInYear) - (this.daysLifeExpFunc(this.daysLifeExp) / venusDaysInYear);
      return venusExtraYears;
    }
  }

  marsRem() {
    const marsDaysInYear = 687;
    if (this.yearsOld < this.yearsLifeExp) {
      let marsYearsLeft = (this.daysLifeExpFunc(this.daysLifeExp) / marsDaysInYear) - (this.daysOldFunc(this.daysOld) / marsDaysInYear);
      return marsYearsLeft;
    } else {
      let marsExtraYears = (this.daysOldFunc(this.daysOld) / marsDaysInYear) - (this.daysLifeExpFunc(this.daysLifeExp) / marsDaysInYear);
      return marsExtraYears;
    }
  }

  jupiterRem() {
    const jupiterDaysInYear = 4380;
    if (this.yearsOld < this.yearsLifeExp) {
      let jupiterYearsLeft = (this.daysLifeExpFunc(this.daysLifeExp) / jupiterDaysInYear) - (this.daysOldFunc(this.daysOld) / jupiterDaysInYear);
      return jupiterYearsLeft;
    } else {
      let jupiterExtraYears = (this.daysOldFunc(this.daysOld) / jupiterDaysInYear) - (this.daysLifeExpFunc(this.daysLifeExp) / jupiterDaysInYear);
      return jupiterExtraYears;
    }
  }

}
