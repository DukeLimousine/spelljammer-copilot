import starfield from "/src/assets/starfield.jpg";


const PlanetCardLg = ({ planet, empty=false }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full md:w-3/4 md:min-w-md flex flex-col max-h-[710px]">
      <div className="w-full mb-4">
        <img src={planet?.imageUrl == "starfield.jpg" ? starfield : planet?.imageUrl || "https://placehold.co/500x400"} alt={planet?.name || "Unknown Planet"} className="w-full rounded-lg" />
      </div>
      { !empty && (
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-4">{planet.name}</h2>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Type:</span>
            <span className="ml-2">{planet.type}</span>
          </div>
          <div>
            <span className="font-semibold">Size (Diameter):</span>
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
            <span className="font-semibold">Avg Distance from Primary:</span>
            <span className="ml-2">{planet.distance}</span>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default PlanetCardLg