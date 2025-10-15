import starssmall from "/src/assets/starssmall.jpg";

const PlanetCardSm = ({
  name = "Unknown Planet",
  description = "No description available",
  imageUrl = "starssmall.jpg",
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
      className="bg-white hover:bg-blue hover:shadow-outline hover:text-white  rounded-lg shadow-lg p-4 gap-4 min-w-xs max-w-md flex flex-nowrap cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex-shrink">
        <img src={imageUrl == "starssmall.jpg" ? starssmall : imageUrl} alt={name} />
      </div>
      <div className="flex-grow text-left">
        <p className="font-bold">{name}</p>
        <p>{description}</p>
      </div>
    </button>
  )
}

export default PlanetCardSm