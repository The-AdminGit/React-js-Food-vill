import ResturentCard from "./ResturentCard";
import { restaurentList } from "../../config";
import { useState } from "react";

const filterData = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
};

const Body = () => {
  //this is a javascript variable
  let searchTxt = "KFC";

  //SearchText is a local variables
  //setSearchText is a function
  const [restaurants, setRestaurents] = useState(restaurentList);

  const [searchText, setSearchText] = useState(); //to create state variable and look is array

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            //need to filter data
            const data = filterData(searchText, restaurants);
            //update and state resturents
            setRestaurents(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurentList">
        {restaurants.map((resturent) => {
          return <ResturentCard key={resturent.data.id} {...resturent.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
