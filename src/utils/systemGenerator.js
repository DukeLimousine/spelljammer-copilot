import { rollDice } from "./diceRoller";
import { faker } from "@faker-js/faker";
import { generatePlanet } from "./planetGenerator";
import { capitalizeFirstLetter } from "./utils";

export const generateSystem = () => {
  let roll = Math.min(rollDice(5), 5); // Ensure max 5 planets
  console.log('Number of planets to generate:', roll);

  function generatePlanets() {
    let planets = [];
    for (let i = 0; i < roll; i++) {
      planets.push(generatePlanet());
    }
    return planets;
  }
  return {
    name: `${capitalizeFirstLetter(faker.word.noun())}space`,
    planets: generatePlanets(),
  }
}