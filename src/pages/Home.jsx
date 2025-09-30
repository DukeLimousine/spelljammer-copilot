import PlanetCardSmCol from "../components/PlanetCardSmCol"
import PlanetCardLg from "../components/PlanetCardLg"

function Home() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col flex-1">
        <PlanetCardSmCol />
      </div>
      <div className="flex justify-center content-center flex-2">
        <PlanetCardLg />
      </div>
    </div>
  )
}

export default Home