import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuhtProvider";
import logo from "../assets/logomain.png";
import avatarImg from "../assets/avatar.png"

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-slate-800 sticky top-0 z-10 text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52"
          >
            <li className="hover:text-orange-500 font-serif">
            <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-orange-500 font-serif">
              <NavLink to="/allToys">All Toys</NavLink>
            </li>
          {user && (
            <li className="hover:text-orange-500 font-serif">
              <NavLink to="myToys">My Toys</NavLink>
            </li>
          )}

          <li className="hover:text-orange-500 font-serif">
            <NavLink to="/addToys">Add a Toy</NavLink>
          </li>
          <li className="hover:text-orange-500 font-serif">
            <NavLink to="/blog">Blogs</NavLink>
          </li>
          </ul>
        </div>
        <Link to="/" className=" normal-case text-xl font-serif">
          <img className="md:w-12 w-12" src={logo} alt="" />
        </Link>
        <span className=" font-extrabold font-serif md:text-3xl">
          The <span className=" text-yellow-500">Toy</span> Box
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className=" hover:text-orange-500 font-serif">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-orange-500 font-serif">
              <NavLink to="/allToys">All Toys</NavLink>
            </li>
          {user && (
            <li className="hover:text-orange-500 font-serif">
              <NavLink to="myToys">My Toys</NavLink>
            </li>
          )}

          <li className="hover:text-orange-500 font-serif">
            <NavLink to="/addToys">Add a Toy</NavLink>
          </li>
          <li className="hover:text-orange-500 font-serif">
            <NavLink to="/blog">Blogs</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="tooltip tooltip-bottom mr-2" data-tip={user?.displayName}>
          {user && (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user && user.photoURL ? user.photoURL : avatarImg} />
              </div>
            </label>
          )}
        </div>

        <div>
          {user ? (
            <button
              className=" px-3 py-2 bg-yellow-500 rounded font-bold text-white font-serif hover:bg-yellow-600"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className=" px-3 py-2 bg-yellow-500 rounded font-bold text-white font-serif hover:bg-yellow-600">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
