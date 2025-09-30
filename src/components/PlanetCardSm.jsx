const PlanetCardSm = ({
  name = "Unknown Planet",
  description = "No description available",
  imageUrl = "https://placehold.co/50"
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 gap-4 min-w-xs max-w-md flex flex-nowrap">
      <div className="flex-shrink">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="flex-grow">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PlanetCardSm