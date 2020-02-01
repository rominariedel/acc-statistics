export default class Statistic {
  constructor({
    username,
    name,
    acc6,
    acc6Per,
    acc7,
    acc7Per,
    acc8,
    acc8Per,
    bar1,
    bar2,
    bar3
  }) {
    this.username = username;
    this.name = name;
    this.acc6 = acc6;
    this.acc6Per = acc6Per;
    this.acc7 = acc7;
    this.acc7Per = acc7Per;
    this.acc8 = acc8;
    this.acc8Per = acc8Per;
    this.bar1 = bar1;
    this.bar2 = bar2;
    this.bar3 = bar3;
  }

  get average() {
    // TODO: check if the average is being calculated correctly
    let rawAvg = (this.bar1 + this.bar2 + this.bar3) / 3;
    return Math.round(rawAvg * 100) / 100;
  }

  static fromAPI({
    username,
    name,
    acc6,
    "acc6%": acc6Per,
    acc7,
    "acc7%": acc7Per,
    acc8,
    "acc8%": acc8Per,
    bar1,
    bar2,
    bar3
  }) {
    return new Statistic({
      username,
      name,
      acc6,
      acc6Per,
      acc7,
      acc7Per,
      acc8,
      acc8Per,
      bar1,
      bar2,
      bar3
    });
  }
}
