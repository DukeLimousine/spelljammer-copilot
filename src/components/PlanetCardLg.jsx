const PlanetCardLg = ({
  name = "Unknown Planet",
  imageUrl = "https://placehold.co/500x400",
  type = "Unknown Type",
  size = "Unknown Size",
  shape = "Unknown Shape",
  features = "Unknown Features"
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 min-w-md max-w-4xl flex flex-col">
      <div className="w-full mb-4">
        <img src={imageUrl} alt={name} className="w-full rounded-lg" />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-4">{name}</h2>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Type:</span>
            <span className="ml-2">{type}</span>
          </div>
          <div>
            <span className="font-semibold">Size:</span>
            <span className="ml-2">{size}</span>
          </div>
          <div>
            <span className="font-semibold">Shape:</span>
            <span className="ml-2">{shape}</span>
          </div>
          <div>
            <span className="font-semibold">Features:</span>
            <span className="ml-2">{features}</span>
          </div>
          <div>
              <span className="font-semibold">Distance from Primary:</span>
              <span className="ml-2"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanetCardLg