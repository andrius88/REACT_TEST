import { NavLink } from "react-router";

function Navigation() {
  return (
    <nav className="flex gap-5 m-4">
      <NavLink to="/" className="bg-amber-600 p-1">Home</NavLink>
      <NavLink to="/booklist" className="bg-amber-600 p-1">Book list</NavLink>
      {/* <NavLink to="/bookregistration" className="bg-amber-600 p-1">New book registration</NavLink> */}
      {/* <NavLink to="/donordata" className="bg-amber-600 p-1">Donor data</NavLink> */}
    </nav>
  );
}

export default Navigation;