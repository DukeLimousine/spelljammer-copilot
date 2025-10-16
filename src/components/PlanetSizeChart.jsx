import { getBiggestPlanet } from "../utils/utils";

const PlanetSizeChart = ({ system }) => {
  return (
    <div id="planet-size-chart" className="chart-container w-full my-0 mx-auto">
      <table className="charts-css bar show-heading show-4-secondary-axes data-spacing-5">
        <caption>Planet Diameters</caption>
        <thead></thead>
        <tbody>
          {system.planets.map((planet) => (
            <tr key={planet.name}>
              <td style={{ "--size": Number(planet.size.replaceAll(/\D/g, "")) / getBiggestPlanet(system.planets) }}><span className="data">{planet.size}</span></td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default PlanetSizeChart