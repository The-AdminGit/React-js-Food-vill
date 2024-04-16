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
    <h1 id="title" key="title">Food vill</h1>
  )
}
// Header component is functional component
const HeaderComponent = function (){
  return (
    <div>
      <Title/>
    <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
    </div>
  )
};

//componets
 const AppLayout =()=>{
  return(
   <div> hiii</div>
  )
 }



// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);