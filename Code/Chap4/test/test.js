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
var assert = require('assert');
describe('provinceTest', function () {
  it('shortfall', function () {
    var Province = require('./Province.js');
    var asia1 = new Province(sampleProvinceData());
    assert.equal(asia1.shortfall, 5);
  });
});