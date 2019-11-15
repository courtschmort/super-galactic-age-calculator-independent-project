export class User {
  constructor(age, avgLifeExp) {
    this.age = age;
    this.avgLifeExp = avgLifeExp;
  }

  calcYearsToDays() {
    let days = this.age * 365;
    return days;
  }

  calcMercury() {
    const days = 88;

  }
}
