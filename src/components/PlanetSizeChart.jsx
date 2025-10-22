import { getBiggestPlanet, planetSizeToNumber } from "../utils/utils";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const PlanetSizeChart = ({ planets }) => {
  let sizeFixedPlanets = planets.map(planet => {
    return {
      ...planet,
      diameter: planetSizeToNumber(planet.size)
    }
  });

  // Calculate dynamic domain based on actual data
  const sizes = sizeFixedPlanets.map(planet => planet.diameter).filter(size => size > 0);
  const minSize = Math.min(...sizes);
  const maxSize = Math.max(...sizes);
  
  // Use dynamic domain with some padding, or fallback to fixed range
  const domain = sizes.length > 0 ? [minSize * 0.5, maxSize * 2] : [1, 1e7];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={sizeFixedPlanets} width={100} height={100}>
        <XAxis dataKey="name" />
        <YAxis scale="log" domain={domain} width={100} label={{
          value: 'Size (Diameter) log10[miles]',
          position: 'insideLeft',
          dx: 0,
          dy: 20,
          angle: -90
        }} />
        <Bar dataKey="diameter" unit="miles" />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default PlanetSizeChart