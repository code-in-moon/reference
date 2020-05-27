import React, { Component } from "react";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

//there is no different here between class and function
//stateless functional component
//whic return a react element
//you must pass the props here as a argument
//you can not use life cycle hooks inside this function you must use class like above
const NavBar = (props) => {
  console.log("navbar render");
  //({totalCounters})
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
          {/* totalCounters */}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
