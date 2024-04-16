import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header
 *  -logo
 *  -nav items
 *  -card
 *
 * body
 * - search bar ,
 * -resturent list,
 *  -resturent card
 *    -image
 *    -name
 *    -rating
 *    -custing
 * footer
 *  -links
 *  -copywrite
 */

// Title component is functional component
const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://th.bing.com/th/id/R.dd4d1acde8fc22ed40fbce3acde6e99a?rik=%2b8JTWnyz2QTWFg&riu=http%3a%2f%2ffoodvilla.no%2fsrc%2fimg%2flogo.png&ehk=Wphc3mBmMYs0rOR4MjkO1zykcVnnjbx6MEDy3h1PSkw%3d&risl=&pid=ImgRaw&r=0"
      ></img>
    </a>
  );
};
// Header component is functional component
const Header = function () {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
};

const burgerKing = {
  name: "Burger King",
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusines: ["Burger","American"],
  rating:"4.2"
}

const ResturentCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image}></img>
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines.join(", ")}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurentList">
      <ResturentCard />
      <ResturentCard />
      <ResturentCard />
      <ResturentCard />
      <ResturentCard />
      
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

//componets
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppLayout />);
