import ResturentCard from "./ResturentCard";
import { restaurentList } from "../../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const filterData = (searchText, restaurants) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
};

const Body = () => {
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  // empty dependency array  => once after render
  //dependency array [searchText] = once after initial render + everytime after render(my searchText change)
  useEffect(() => {
    //api call
    getResturents();
  }, []);

  async function getResturents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional chaining
    setAllRestaurents(json?.data?.cards[2]?.card?.card?.data);
    setFilterRestaurants(json?.data?.cards[2]?.card?.card?.data);
  }
  console.log("render");
  // console.log(restaurants);
  //conditional rendering
  //if resturent is empty => shimmer ui
  //if has resturent data => actual data render

  //not render components(early return)
  if (!allRestaurents) return null;

  if (filterRestaurants?.length === 0) return <h1>No match your filter!!</h1>;
  return allRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurents);
            //update and state resturents
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurentList">
        {filterRestaurants.map((restaurant) => {
          return (
            <ResturentCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
