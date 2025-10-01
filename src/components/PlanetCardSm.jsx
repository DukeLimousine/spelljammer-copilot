const PlanetCardSm = ({
  name = "Unknown Planet",
  description = "No description available",
  imageUrl = "https://placehold.co/50",
  index = 0,
  onPlanetSelect
}) => {
  const handleClick = () => {
    if (onPlanetSelect) {
      onPlanetSelect(index);
    }
  };

  return (
    <button 
      data-index={index} 
      className="bg-white hover:bg-purple-300 hover:shadow-outline  rounded-lg shadow-md p-4 gap-4 min-w-xs max-w-md flex flex-nowrap cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex-shrink">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="flex-grow text-left">
        <h2 className="font-bold">{name}</h2>
        <p>{description}</p>
      </div>
    </button>
  )
}

export default PlanetCardSm