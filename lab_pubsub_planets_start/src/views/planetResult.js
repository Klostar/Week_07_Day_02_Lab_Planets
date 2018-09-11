const PubSub = require('../helpers/pub_sub.js');

const PlanetResult = function () {

};

PlanetResult.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:return-planet', (event) => {
    const planetDetails = document.querySelector('.planet-details');
    planetDetails.textContent = '';
    const planetObj = event.detail;
    this.displayDetail(planetObj, planetDetails);

  });
};

PlanetResult.prototype.newElement = function (tagName, parentName) {
  const newElem = document.createElement(tagName);
  parentName.appendChild(newElem);
  return newElem;
};

PlanetResult.prototype.displayDetail = function (planet, parent) {
  const keys = Object.keys(planet);
  console.log(planet);
  const jhv = keys.forEach( (key) => {
    if (key != 'image') {
      const planetDetail = this.newElement('p', parent);
      planetDetail.textContent = `${key}: ${planet[key]}`;
    }
    else {
      const planetDetail = this.newElement('img', parent);
      planetDetail.src = planet[key];
      planetDetail.classList.add('planet-image');
    }
});
};

module.exports = PlanetResult;
