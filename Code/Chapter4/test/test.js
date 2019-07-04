var Province = require('./Province.js');
var expect = require('chai').expect
function sampleProvinceData() {
  return {
    name: "Asia",
    producers: [
      { name: "Byzantium", cost: 10, production: 9 },
      { name: "Attalia", cost: 12, production: 10 },
      { name: "Sinope", cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20
  };
}
describe('provinceTest1', function () {
  it('shortfall', function () {
    var asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equals(5);
  });
});