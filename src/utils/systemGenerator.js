import { rollDice } from "./diceRoller";
import { faker } from "@faker-js/faker";
import { generatePlanet } from "./planetGenerator";
import { capitalizeFirstLetter } from "./utils";
import * as attributes from "../constants/attributes";

export const generateSystem = () => {
  let systemType = rollSystemType();
  let planets = generatePlanets(systemType);
  let systemName = generateSystemName();


  function rollSystemType() {
    let roll = rollDice(100);
    if (roll >= 1 && roll <= 95) {
      return attributes.SYSTEM_TYPES.STANDARD;
    } else if (roll >= 96 && roll <= 100) {
      let specialRoll = rollDice(100);
      if (specialRoll >= 1 && specialRoll <= 20) {
        return attributes.SYSTEM_TYPES.FIXED;
      } else if (specialRoll >= 21 && specialRoll <= 30) {
        return attributes.SYSTEM_TYPES.RANDOM;
      } else if (specialRoll >= 31 && specialRoll <= 40) {
        return attributes.SYSTEM_TYPES.SEMI_RANDOM;
      } else if (specialRoll >= 41 && specialRoll <= 70) {
        return attributes.SYSTEM_TYPES.SINGLE;
      } else if (specialRoll >= 71 && specialRoll <= 95) {
        return attributes.SYSTEM_TYPES.VOID;
      } else if (specialRoll >= 91 && specialRoll <= 100) {
        return attributes.SYSTEM_TYPES.NESTED;
      }
    }
  }

  function rollPrimaryType() {
    let roll = rollDice(100);
    if (roll >= 1 && roll <= 70) {
      return attributes.PLANET_TYPES.FIRE;
    } else if (roll >= 71 && roll <= 95) {
      let planetRoll = rollDice(100);
      if (planetRoll >= 1 && planetRoll <= 80) {
        return attributes.PLANET_TYPES.EARTH;
      } else if (planetRoll >= 81 && planetRoll <= 90) {
        return attributes.PLANET_TYPES.AIR;
      } else if (planetRoll >= 91 && planetRoll <= 100) {
        return attributes.PLANET_TYPES.WATER;
      }
    } else if (roll >= 96 && roll <= 99) {
      return attributes.PLANET_TYPES.EMPTY;
    } else {
      let portalRoll = rollDice(100);
      if (portalRoll >= 1 && portalRoll <= 30) {
        return attributes.PLANET_TYPES.P_O;
      } else if (portalRoll >= 31 && portalRoll <= 50) {
        return attributes.PLANET_TYPES.P_F;
      } else if (portalRoll >= 51 && portalRoll <= 60) {
        return attributes.PLANET_TYPES.P_E;
      } else if (portalRoll >= 61 && portalRoll <= 70) {
        return attributes.PLANET_TYPES.P_W;
      } else if (portalRoll >= 71 && portalRoll <= 80) {
        return attributes.PLANET_TYPES.P_A;
      } else if (portalRoll >= 81 && portalRoll <= 90) {
        return attributes.PLANET_TYPES.P_P;
      } else if (portalRoll >= 91 && portalRoll <= 100) {
        return attributes.PLANET_TYPES.P_N;
      }
    }
  }

  function generatePlanets(systemType) {
    let planetsArray = [];
    let primary = null;
    let additionalPlanets = 0;

    // First, generate the primary unless Void or Nested
    if (![attributes.SYSTEM_TYPES.VOID, attributes.SYSTEM_TYPES.NESTED].includes(systemType)) {
      primary = generatePlanet(rollPrimaryType(), true);
    }

    // Next, determine how many additional planets, if any, to generate
    if (![
      attributes.SYSTEM_TYPES.VOID, 
      attributes.SYSTEM_TYPES.NESTED,
      attributes.SYSTEM_TYPES.SINGLE].includes(systemType)) {
        let planetsRoll = rollDice(100);
        if (planetsRoll >= 1 && planetsRoll <= 5) {
          additionalPlanets = 1;
        } else if (planetsRoll >= 6 && planetsRoll <= 10) {
          additionalPlanets = 2;
        } else if (planetsRoll >= 11 && planetsRoll <= 15) {
          additionalPlanets = 3;
        } else if (planetsRoll >= 16 && planetsRoll <= 20) {
          additionalPlanets = 4;
        } else if (planetsRoll >= 21 && planetsRoll <= 30) {
          additionalPlanets = 5;
        } else if (planetsRoll >= 31 && planetsRoll <= 45) {
          additionalPlanets = 6;
        } else if (planetsRoll >= 46 && planetsRoll <= 55) {
          additionalPlanets = 7;
        } else if (planetsRoll >= 56 && planetsRoll <= 65) {
          additionalPlanets = 8;
        } else if (planetsRoll >= 66 && planetsRoll <= 75) {
          additionalPlanets = 9;
        } else if (planetsRoll >= 76 && planetsRoll <= 85) {
          additionalPlanets = 10;
        } else if (planetsRoll >= 86 && planetsRoll <= 90) {
          additionalPlanets = rollDice(20);
        } else if (planetsRoll >= 91 && planetsRoll <= 100) {
          additionalPlanets = 0;
        }
    }


    // Push the primary to the planet array in first position
    if (primary) {
      planetsArray.push(primary);
    }

    // Push the additional planets to the planet array
    for (let i = 0; i < additionalPlanets; i++) {
      planetsArray.push(generatePlanet());
    }

    return planetsArray;
  }

  function generateSystemName() {
    let name = "";
    let roll = rollDice(100);
    if (roll >= 1 && roll <= 3) {
      name = attributes.RANDOM_WORDS[rollDice(attributes.RANDOM_WORDS.length) - 1];
    } else if (roll >= 4 && roll <= 30) {
      name = attributes.FANTASY_RACE_NAMES[rollDice(attributes.FANTASY_RACE_NAMES.length) - 1];
    } else if (roll >= 31 && roll <= 100) {
      name = faker.word.noun();
    }
    if (name.endsWith('s')) {
      name = name.slice(0, -1);
    }
    return capitalizeFirstLetter(name + "space");
  }

  return {
    name: `${systemName}`,
    planets: planets,
  }
}