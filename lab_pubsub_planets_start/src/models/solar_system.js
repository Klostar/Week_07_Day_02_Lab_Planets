const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem:planets-ready', this.planets);
  PubSub.subscribe('PlanetInput:planet-selected', (event) => {
    const result = this.planets.find( function (planet) {
      return planet.name == event.detail;

    });
    console.log(result);
    PubSub.publish('SolarSystem:return-planet', result);
  });
};

module.exports = SolarSystem;
