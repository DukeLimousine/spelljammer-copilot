import PlanetCardSm from "./PlanetCardSm"

const PlanetCardSmCol = ({ system }) => {
  return (
    <div className="flex flex-col gap-4">
      {system.planets.map((planet, index) => (
        <PlanetCardSm 
        key={`${planet.name}-${index}`} 
        name={planet.name} 
        description={planet.description}
        size={planet.size}
        shape={planet.shape}
        features={planet.features}
        />
      ))}
    </div>
  )
}

export default PlanetCardSmCol