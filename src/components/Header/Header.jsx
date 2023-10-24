import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/Donation'>Donation</NavLink></li>
      <li><NavLink to='/Statistics'>Statistics</NavLink></li>
    </>
   
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src="/src/assets/img/Logo.png" alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {links}
            <li>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header;