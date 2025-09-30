import { rollDice } from "./diceRoller";
import { faker } from "@faker-js/faker";
import * as attributes from "../constants/attributes";

export const generatePlanet = () => {
  let planetName = attributes.PLANET_NAMES[rollDice(attributes.PLANET_NAMES.length) - 1];
  let planetType = rollType();
  let planetSize = rollSize(planetType);
  let planetShape = rollShape();

  function rollType() {
    let roll = rollDice(100);
    
    if (roll <= 40) {
      return attributes.PLANET_TYPES.EARTH;
    } else if (roll >= 41 && roll <= 60) {
      return attributes.PLANET_TYPES.FIRE;
    } else if (roll >= 61 && roll <= 80) {
      return attributes.PLANET_TYPES.AIR;
    } else if (roll >= 81 && roll <= 99) {
      return attributes.PLANET_TYPES.WATER;
    } else if (roll === 100) {
      return attributes.PLANET_TYPES.LIVE;
    } else {
      return attributes.PLANET_TYPES.EARTH;
    }
  }

  function rollSize(planetType) {
    let roll = rollDice(100);
    
    if (planetType === attributes.PLANET_TYPES.EARTH || planetType === attributes.PLANET_TYPES.WATER) {
      // Earth and Water types table
      if (roll >= 1 && roll <= 5) {
        return attributes.PLANET_SIZES.EARTH_AND_WATER.A;
      } else if (roll >= 6 && roll <= 10) {
        return attributes.PLANET_SIZES.EARTH_AND_WATER.B;
      } else if (roll >= 11 && roll <= 20) {
        return attributes.PLANET_SIZES.EARTH_AND_WATER.C;
      } else if (roll >= 21 && roll <= 40) {
        return attributes.PLANET_SIZES.EARTH_AND_WATER.D;
      } else if (roll >= 41 && roll <= 60) {
        return attributes.PLANET_SIZES.EARTH_AND_WATER.E;
      } else if (roll >= 61 && roll <= 80) {
        return attributes.PLANET_SIZES.EARTH_AND_WATER.F;
      } else if (roll >= 81 && roll <= 90) {
        return attributes.PLANET_SIZES.EARTH_AND_WATER.G;
      } else if (roll >= 91 && roll <= 100) {
        return attributes.PLANET_SIZES.EARTH_AND_WATER.H;
      } else {
        return attributes.PLANET_SIZES.EARTH_AND_WATER.F;
      }
    } else {
      // Fire and Air types table
      if (roll >= 1 && roll <= 2) {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.A;
      } else if (roll >= 3 && roll <= 5) {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.B;
      } else if (roll >= 6 && roll <= 10) {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.C;
      } else if (roll >= 11 && roll <= 20) {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.D;
      } else if (roll >= 21 && roll <= 35) {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.E;
      } else if (roll >= 36 && roll <= 50) {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.F;
      } else if (roll >= 51 && roll <= 70) {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.G;
      } else if (roll >= 71 && roll <= 85) {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.H;
      } else if (roll >= 86 && roll <= 95) {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.I;
      } else if (roll >= 96 && roll <= 100) {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.J;
      } else {
        return attributes.PLANET_SIZES.FIRE_AND_AIR.F;
      }
    }
  }

  function rollShape() {
    let roll = rollDice(100);
    
    if (roll >= 1 && roll <= 5) {
      return attributes.PLANET_SHAPES.AMORPHOUS;
    } else if (roll >= 6 && roll <= 15) {
      return attributes.PLANET_SHAPES.BELT;
    } else if (roll >= 16 && roll <= 20) {
      return attributes.PLANET_SHAPES.CLUSTER;
    } else if (roll >= 21 && roll <= 65) {
      return attributes.PLANET_SHAPES.SPHERICAL;
    } else if (roll >= 66 && roll <= 70) {
      return attributes.PLANET_SHAPES.CUBIC;
    } else if (roll >= 71 && roll <= 90) {
      return attributes.PLANET_SHAPES.FLATWORLD;
    } else if (roll >= 91 && roll <= 95) {
      return attributes.PLANET_SHAPES.ELLIPTICAL;
    } else if (roll >= 96 && roll <= 99) {
      return attributes.PLANET_SHAPES.REGULAR;
    } else if (roll === 100) {
      return attributes.PLANET_SHAPES.IRREGULAR;
    } else {
      return attributes.PLANET_SHAPES.SPHERICAL;
    }
  }

return {
    name: `${planetName.toUpperCase()}`,
    size: planetSize,
    shape: planetShape,
    type: planetType,
    description: `${planetSize} ${planetShape} ${planetType} world`,
    features: `${faker.lorem.sentence()}`,
    imageUrl: "https://placehold.co/500x400",
  }
}