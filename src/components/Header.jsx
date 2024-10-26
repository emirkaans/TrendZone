import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex h-10 items-center justify-between space-x-3 bg-amber-300 px-4 py-2 sm:h-16">
        <NavLink to="/">
          <h1 className="text-xl sm:text-4xl">TrendZone</h1>
        </NavLink>
        <div className="hidden justify-end space-x-3 sm:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/category">Categories</NavLink>
          <NavLink to="/account">User</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
