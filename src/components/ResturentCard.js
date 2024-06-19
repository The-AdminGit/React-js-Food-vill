 import IMG_URL_CDN from "../../config";
 const ResturentCard = ({
    name,
    cuisines,
    area,
    lastMileTravelString,
    cloudinaryImageId,
    costForTwoString,
    avgRating,}) => {
    return (
      <div className="card">
        <img
          src={
            IMG_URL_CDN
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
          <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    );
  };

  export default ResturentCard;