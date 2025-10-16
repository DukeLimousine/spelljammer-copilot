export const capitalizeFirstLetter = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const formatDistance = (distance) => {
    let days = (distance / 100).toFixed(1);
    if (distance === 0) {
        return "N/A";
    } else if (distance < 1000) {
        return `${distance} million miles (${days} days)`;
    } else {
        return `${(distance / 1000).toFixed(2)} billion miles (${days} days)`;
    }
}

export const getBiggestPlanet = (planets) => {
    let planetSizes = planets.map(planet => Number(planet.size.replaceAll(/\D/g, "")));
    return Math.max(...planetSizes);
}