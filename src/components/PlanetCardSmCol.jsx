import PlanetCardSm from "./PlanetCardSm"

const PlanetCardSmCol = () => {
  return (
    <div className="flex flex-col gap-4">
      <PlanetCardSm name="Planet 1"/>
      <PlanetCardSm name="Planet 2"/>
      <PlanetCardSm name="Planet 3"/>
    </div>
  )
}

export default PlanetCardSmCol