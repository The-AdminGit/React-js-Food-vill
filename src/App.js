import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
