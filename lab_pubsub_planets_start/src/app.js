const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInput = require('./views/planetInput.js');
const PlanetResult = require('./views/planetResult.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);

  const planetResult = new PlanetResult();
  planetResult.bindEvents();

  const planetInput = new PlanetInput();
  planetInput.bindEvents();

  planetsDataModel.bindEvents();
});
