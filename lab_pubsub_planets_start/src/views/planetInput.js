const PubSub = require('../helpers/pub_sub.js');

const PlanetInput = function () {
};

PlanetInput.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:planets-ready', (event) => {
    const planets = event.detail;
    planets.forEach( (planet) => {
      const planetElement = document.querySelector(`#${planet.name}`);
      planetElement.addEventListener('click', () => {
        PubSub.publish('PlanetInput:planet-selected', `${planet.name}`);
      });
    });
  });
};

module.exports = PlanetInput;
