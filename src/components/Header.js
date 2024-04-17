// Title component is functional component
export const Title = () => {
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

  export default Header;