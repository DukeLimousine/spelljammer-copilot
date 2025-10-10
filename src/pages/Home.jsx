import PlanetCardSmCol from "../components/PlanetCardSmCol"
import PlanetCardLg from "../components/PlanetCardLg"
import { useState } from "react"
import { generateSystem } from "../utils/systemGenerator"

function Home() {
  const [system, setSystem] = useState(() => generateSystem())
  const [planet, setPlanet] = useState(system.planets[0])
  // Updates the planet card lg to the planet at the index
  function updatePlanetCardLg(index) {
    setPlanet(system.planets[index])
  }
  // Generates a new system and sets the planet to the first planet in the system
  function refreshSystem() {
    let system = generateSystem()
    setSystem(system)
    setPlanet(system.planets[0])
  }
  return (
    <div>
      <div className="flex justify-center mb-4">
        <button className="button-primary" onClick={refreshSystem}>Generate System</button>
      </div>
      
      <div className="flex flex-col flex-wrap gap-4 bg-white rounded-lg shadow-md p-4 mb-8">
        <h1 className="text-center">{system.name}</h1>
        <p><span className="font-semibold">Planetary Motion:</span> {system.motion}</p>
        <p><span className="font-semibold">System Diameter:</span> {system.diameter}</p>
        <p><span className="font-semibold">Features & Plot Hooks:</span> {system.description}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col flex-1">
          <PlanetCardSmCol system={system} onPlanetSelect={updatePlanetCardLg}/>
        </div>
        <div className="flex justify-end content-center flex-2">
          <PlanetCardLg planet={planet} empty={!planet} />
        </div>
      </div>
    </div>
  )
}

export default Home