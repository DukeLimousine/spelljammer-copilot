import { rollDice } from "./diceRoller";
import { faker } from "@faker-js/faker";
import * as attributes from "../constants/attributes";
import { capitalizeFirstLetter, formatDistance } from "./utils";

export const generatePlanet = (type=null, primary=false, distance=0) => {
  let planetName = generateName(type, primary);
  let planetType = type ? type : rollType();
  let planetSize = rollSize(planetType);
  let planetShape = rollShape(planetType);
  let description = generateDescription(planetSize, planetShape, planetType);
  let features = generateFeatures(planetType);
  // let features = generateFeaturesTest(planetType, false, 5);

  function generateName(type, primary) {
    let name = "";
    if (type === attributes.PLANET_TYPES.EMPTY) {
      name = "Empty";
    } else {
      name = attributes.PLANET_NAMES[rollDice(attributes.PLANET_NAMES.length) - 1];
      if (rollDice(100) <= 7) {
        name += " " + attributes.PLANET_POSTFIXES[rollDice(attributes.PLANET_POSTFIXES.length) - 1];
      }  
      if (rollDice(100) <= 7) {
        name += " " + rollDice(1000) + String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
        
    }
    return name + (primary ? " (Primary)" : "");
  }

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
    if (planetType === attributes.PLANET_TYPES.EMPTY) {
      return null;
    }
    let roll = rollDice(100);
    let returnValue = "";
    
    if (planetType === attributes.PLANET_TYPES.EARTH || planetType === attributes.PLANET_TYPES.WATER) {
      // Earth and Water types table

      if (roll >= 1 && roll <= 5) {
        returnValue = attributes.PLANET_SIZES.EARTH_AND_WATER.A;
      } else if (roll >= 6 && roll <= 10) {
        returnValue = attributes.PLANET_SIZES.EARTH_AND_WATER.B;
      } else if (roll >= 11 && roll <= 20) {
        returnValue = attributes.PLANET_SIZES.EARTH_AND_WATER.C;
      } else if (roll >= 21 && roll <= 40) {
        returnValue = attributes.PLANET_SIZES.EARTH_AND_WATER.D;
      } else if (roll >= 41 && roll <= 60) {
        returnValue = attributes.PLANET_SIZES.EARTH_AND_WATER.E;
      } else if (roll >= 61 && roll <= 80) {
        returnValue = attributes.PLANET_SIZES.EARTH_AND_WATER.F;
      } else if (roll >= 81 && roll <= 90) {
        returnValue = attributes.PLANET_SIZES.EARTH_AND_WATER.G;
      } else if (roll >= 91 && roll <= 100) {
        returnValue = attributes.PLANET_SIZES.EARTH_AND_WATER.H;
      } else {
        returnValue = attributes.PLANET_SIZES.EARTH_AND_WATER.F;
      }
    } else {
      // Fire and Air types table
      if (roll >= 1 && roll <= 2) {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.A;
      } else if (roll >= 3 && roll <= 5) {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.B;
      } else if (roll >= 6 && roll <= 10) {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.C;
      } else if (roll >= 11 && roll <= 20) {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.D;
      } else if (roll >= 21 && roll <= 35) {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.E;
      } else if (roll >= 36 && roll <= 50) {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.F;
      } else if (roll >= 51 && roll <= 70) {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.G;
      } else if (roll >= 71 && roll <= 85) {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.H;
      } else if (roll >= 86 && roll <= 95) {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.I;
      } else if (roll >= 96 && roll <= 100) {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.J;
      } else {
        returnValue = attributes.PLANET_SIZES.FIRE_AND_AIR.F;
      } 
    }
    let letter = returnValue.split(" ")[1];
    let diameter = 0;
    switch (letter) {
      case "A":
        diameter = Math.floor(Math.random() * 10) + 1;
        break;
      case "B":
        diameter = Math.floor(Math.random() * 100) + 10;
        break;
      case "C":
        diameter = Math.floor(Math.random() * 1000) + 100;
        break;
      case "D":
        diameter = Math.floor(Math.random() * 3000) + 1000;
        break;
      case "E":
        diameter = Math.floor(Math.random() * 6000) + 4000;
        break;
      case "F":
        diameter = Math.floor(Math.random() * 30000) + 10000;
        break;
      case "G":
        diameter = Math.floor(Math.random() * 60000) + 40000;
        break;
      case "H":
        diameter = Math.floor(Math.random() * 900000) + 100000;
        break;
      case "I":
        diameter = Math.floor(Math.random() * 9000000) + 1000000;
        break;
      case "J":
        diameter = Math.floor(Math.random() * 1000000) + 10000000;
        break;
      default:
        diameter = Math.floor(Math.random() * 10000) + 5000;
        break;
    }
    returnValue = `${returnValue} (${diameter.toLocaleString('en-US')} miles)`;
    return returnValue;
  }

  function rollShape(planetType) {
    if (planetType === attributes.PLANET_TYPES.EMPTY) {
      return null;
    }
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

  function generateDescription(planetSize, planetShape, planetType) {
    let description = "";
    description = `${planetSize.split(" (")[0] || ""} ${planetShape || ""} ${planetType || ""}`;
    if (!attributes.PORTAL_TYPES.includes(planetType) && planetType !== attributes.PLANET_TYPES.EMPTY) {
      description += " world";
    }
    return description;
  }

  function generateFeatures(planetType, ignore110=false) {
    let features = [];
    let moons = 0;
    if (planetType === attributes.PLANET_TYPES.EMPTY || attributes.PORTAL_TYPES.includes(planetType)) {
      features = "No features";
    } else {
      let roll = rollDice(100);
      if (roll >= 1 && roll <= 10) {
        if (!ignore110) {
          moons += 1;
          generateFeatures(planetType, true).split(", ").forEach(feature => {
            if (feature && feature !== "No features") {
              features.push(feature);
            }
          });
        }
      } else if (roll >= 11 && roll <= 20) {
        moons += rollDice(4);
      } else if (roll >= 21 && roll <= 25) {
        moons += rollDice(4);
        generateFeatures(planetType, false).split(", ").forEach(feature => {
          if (feature && feature !== "No features") {
            features.push(feature);
          }
        });
      } else if (roll >= 26 && roll <= 35) {
        features.push("Cluster of Asteroids"); 
      } else if (roll >= 36 && roll <= 45) {
        features.push("Ring (earth)");
      } else if (roll >= 46 && roll <= 55) {
        features.push("Ring (fire)");
      } else if (roll >= 56 && roll <= 65) {
        features.push("Ring (water/ice)");
      } else if (roll >= 66 && roll <= 75) {
        features.push("Planet hotter than normal");
      } else if (roll >= 76 && roll <= 85) {
        features.push("Planet colder than normal");
      } else if (roll >= 86 && roll <= 95) {
        features.length = 0;
        features.push("Vaccuum (Planet has no atmosphere)");
      } else if (roll >= 96 && roll <= 99) {
        features.push("Civilization -- world empire");
      } else if (roll === 100) {
        let additionalFeatures1 = generateFeatures(planetType, false);
        let additionalFeatures2 = generateFeatures(planetType, false);
        if (additionalFeatures1 !== "No features") {
          features.push(additionalFeatures1);
        }
        if (additionalFeatures2 !== "No features") {
          features.push(additionalFeatures2);
        }
      }
        
      if (moons > 0) {
        features.push(`${moons} moon${moons > 1 ? "s" : ""}`);
      }

    }
    // Get all the moons from all potentially recursive feature rolls and total
    let moonTotal = 0;
    features.forEach((f, index) => {
      if (f.includes("moon")) {
        moonTotal += parseInt(f.split(" ")[0]);
      }
    });
    //loop back through and remove all the moons from the features array
    features = features.filter(feature => !feature.includes("moon"));
    // add the total moons to the features array for the final result
    if (moonTotal > 0) {
      features.push(`${moonTotal} moon${moonTotal > 1 ? "s" : ""}`);
    }
    return features.join(", ");
  }

  function generateFeaturesTest(planetType, ignore110 = false, setroll) {
    let features = [];
    let moons = 0;
    if (planetType === attributes.PLANET_TYPES.EMPTY || attributes.PORTAL_TYPES.includes(planetType)) {
      features = "No features";
    } else {
      let roll = setroll;
      if (roll >= 1 && roll <= 10) {
        if (!ignore110) {
          moons += 1;
          generateFeaturesTest(planetType, true, 13).split(", ").forEach(feature => {
            if (feature && feature !== "No features") {
              features.push(feature);
            }
          });
        }
      } else if (roll >= 11 && roll <= 20) {
        moons += rollDice(4);
      } else if (roll >= 21 && roll <= 25) {
        moons += rollDice(4);
        generateFeaturesTest(planetType, false, 13).split(", ").forEach(feature => {
          if (feature && feature !== "No features") {
            features.push(feature);
          }
        });
      } else if (roll >= 26 && roll <= 35) {
        features.push("Cluster of Asteroids");
      } else if (roll >= 36 && roll <= 45) {
        features.push("Ring (earth)");
      } else if (roll >= 46 && roll <= 55) {
        features.push("Ring (fire)");
      } else if (roll >= 56 && roll <= 65) {
        features.push("Ring (water/ice)");
      } else if (roll >= 66 && roll <= 75) {
        features.push("Planet hotter than normal");
      } else if (roll >= 76 && roll <= 85) {
        features.push("Planet colder than normal");
      } else if (roll >= 86 && roll <= 95) {
        features.length = 0;
        features.push("Vaccuum (Planet has no atmosphere)");
      } else if (roll >= 96 && roll <= 99) {
        features.push("Civilization -- world empire");
      } else if (roll === 100) {
        let additionalFeatures1 = generateFeaturesTest(planetType, false, 13);
        let additionalFeatures2 = generateFeaturesTest(planetType, false, 13);
        if (additionalFeatures1 !== "No features") {
          features.push(additionalFeatures1);
        }
        if (additionalFeatures2 !== "No features") {
          features.push(additionalFeatures2);
        }
      }

      if (moons > 0) {
        features.push(`${moons} moon${moons > 1 ? "s" : ""}`);
      }

    }
    // Get all the moons from all potentially recursive feature rolls and total
    let moonTotal = 0;
    features.forEach((f, index) => {
      if (f.includes("moon")) {
        moonTotal += parseInt(f.split(" ")[0]);
      }
    });
    //loop back through and remove all the moons from the features array
    features = features.filter(feature => !feature.includes("moon"));
    // add the total moons to the features array for the final result
    if (moonTotal > 0) {
      features.push(`${moonTotal} moon${moonTotal > 1 ? "s" : ""}`);
    }
    return features.join(", ");
  }

return {
    name: `${capitalizeFirstLetter(planetName)}`,
    size: planetSize || "",
    shape: planetShape || "",
    type: planetType || "",
    description: description || "",
    features: features || "",
    imageUrl: "starfield.jpg",
    distance: formatDistance(distance)
  }
}