import { rollDice } from "./diceRoller";
import { faker } from "@faker-js/faker";
import { generatePlanet } from "./planetGenerator";
import { capitalizeFirstLetter } from "./utils";
import * as attributes from "../constants/attributes";
import { formatDistance } from "./utils";

export const generateSystem = () => {
  let systemDiameter = "";
  let systemType = rollSystemType();
  let planets = generatePlanets(systemType);
  let systemName = generateSystemName();
  let planetaryMotion = generatePlanetaryMotion(planets);
  let systemDescription = generateSystemDescription();


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
    let currentPlanetDistance = 0;
    let planetsArray = [];
    let primary = null;
    let additionalPlanets = 0;

    // First, generate the primary unless Void or Nested
    if (![attributes.SYSTEM_TYPES.VOID, attributes.SYSTEM_TYPES.NESTED].includes(systemType)) {
      primary = generatePlanet(rollPrimaryType(), true, currentPlanetDistance);
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
      // Increment by dice roll times 20 if distance is less than 200, otherwise increment by dice roll times 400

      if (currentPlanetDistance < 200) {
        currentPlanetDistance += rollDice(6) * 20;
      } else {
        currentPlanetDistance += rollDice(4) * 400;
      }
      planetsArray.push(generatePlanet(null, false, currentPlanetDistance));
    }
    // The diameter of the system is the distance of the last planet from the primary times 4
    systemDiameter = formatDistance(currentPlanetDistance * 4); 
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

  function generatePlanetaryMotion(planets) {
    let motion = "";
    let roll = rollDice(100);
    if (planets.length === 0) {
      return motion;
    } else if (planets.length === 1) {
      let planetRoll = rollDice(100);
      if (planetRoll >= 1 && planetRoll <= 75) {
        motion = "The Primary is stationary in the system center.";
      } else {
        motion = "The Primary moves randomly within the system.";
      }
      return motion;
    } else if (planets.length >=2 ) {
      motion += "Planets have";
    }

    if (roll >= 1 && roll <= 10) {
      motion += " no movement -- fixed position.";
    } else if (roll >= 11 && roll <= 15) {
      motion += " random movement within the system.";
    } else if (roll >= 16 && roll <= 50) {
      motion += " clockwise orbit around the primary or system center.";
    } else if (roll >= 51 && roll <= 90) {
      motion += " counter-clockwise orbit around the primary or system center.";
    } else if (roll >= 91 && roll <= 100) {
      motion = "Each planet is either stationary or moves independently in a clockwise or counter-clockwise direction around the primary or system center, or moves randomly within the system.";
    }
    return motion;
  }

  function generateSystemDescription() {
    let description = "";
    if (planets.length === 0) {
      description += "This system is a void. ";
    }
    let feature = attributes.SYSTEM_FEATURES[rollDice(attributes.SYSTEM_FEATURES.length) - 1];
    if (feature.includes("<race>")) {
      let race = attributes.FANTASY_RACE_NAMES[rollDice(attributes.FANTASY_RACE_NAMES.length) - 1];
      if (race.endsWith('s')) {
        race = race.slice(0, -1);
      }
      description += feature.replace("<race>", race);
    } else {
      description += feature;
    }

    return description;
  }

  return {
    name: `${systemName}`,
    planets: planets,
    motion: planetaryMotion,
    description: systemDescription,
    diameter: systemDiameter
  }
}