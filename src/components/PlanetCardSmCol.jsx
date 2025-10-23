import PlanetCardSm from "./PlanetCardSm"

const PlanetCardSmCol = ({ system, onPlanetSelect }) => {
  return (
    <div className="flex flex-col gap-4 lg:items-start items-center">
      {system.planets.map((planet, index) => (
        <PlanetCardSm 
        key={`${planet.name}-${index}`} 
        name={planet.name} 
        description={planet.description}
        size={planet.size}
        shape={planet.shape}
        features={planet.features}
        index={index}
        onPlanetSelect={onPlanetSelect}
        />
      ))}
    </div>
  )
}

export default PlanetCardSmCol