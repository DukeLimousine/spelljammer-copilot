const PlanetCardLg = ({ planet }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 min-w-md max-w-4xl flex flex-col">
      <div className="w-full mb-4">
        <img src={planet.imageUrl} alt={planet.name} className="w-full rounded-lg" />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-4">{planet.name}</h2>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Type:</span>
            <span className="ml-2">{planet.type}</span>
          </div>
          <div>
            <span className="font-semibold">Size:</span>
            <span className="ml-2">{planet.size}</span>
          </div>
          <div>
            <span className="font-semibold">Shape:</span>
            <span className="ml-2">{planet.shape}</span>
          </div>
          <div>
            <span className="font-semibold">Features:</span>
            <span className="ml-2">{planet.features}</span>
          </div>
          <div>
            <span className="font-semibold">Distance from Primary:</span>
            <span className="ml-2">{planet.distance}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanetCardLg