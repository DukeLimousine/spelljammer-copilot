import PlanetCardSmCol from "../components/PlanetCardSmCol"
import PlanetCardLg from "../components/PlanetCardLg"
import { useState } from "react"
import { generateSystem } from "../utils/systemGenerator"

function Home() {
  const [system, setSystem] = useState(() => generateSystem())
  return (
    <div>
      <button className="button-primary" onClick={() => setSystem(generateSystem())}>Generate System</button>
      <h1>{system.name}</h1>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col flex-1">
          <PlanetCardSmCol system={system}/>
        </div>
        <div className="flex justify-center content-center flex-2">
          <PlanetCardLg planet={system.planets[0]} />
        </div>
      </div>
    </div>
  )
}

export default Home