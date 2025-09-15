import Container from "../global/Container";
import websiteLogo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/shop",
      name: "Shop",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <Container>
      <div className=" py-3 flex justify-between  items-center relative">
        {/* lgoo */}
        <div className="flex gap-2 items-center w-full">
          <div className="w-8">
            <img
              src={websiteLogo}
              alt="navbar logo"
              className="w-full h-full"
            />
          </div>
          <h1 className="font-bold text-[#32BEA6]">PShop</h1>
        </div>

        {/* navb items */}
        <div className="w-full  flex justify-center">
          <ul
            className={`flex items-center duration-700 flex-col sm:flex-row gap-6 absolute sm:static bg-[#32BEA6] w-full sm:bg-white  py-5 sm:py-0 rounded-md sm:rounded-none right-0.5 justify-center ${
              open ? "top-16" : "-top-64"
            }`}
          >
            {navItems?.map((item, index) => (
              <li key={index} className="text-gray-600 ">
                <NavLink to={item?.path}>{item?.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* searchbar and shopicon and account icon */}
        <div className="w-full ">
          <div className="flex justify-end">
            <div className="flex items-center sm:gap-5 gap-2">
              <div className="hidden sm:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border outline-none px-4 py-1 rounded-2xl"
                />
              </div>

              <div className=" w-10 h-10  sm:hidden   items-center justify-center cursor-pointer flex ">
                <Search className="text-[#32BEA6]" />
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to="/cart"
                  className=" w-10 h-10 items-center justify-center cursor-pointer flex relative"
                >
                  <ShoppingBag className="text-[#32BEA6]" />
                  <div className="bg-red-600 rounded-full  w-4 h-4 flex justify-center items-center absolute top-1 right-0 animate-bounce">
                    <span className=" text-white text-xs">1</span>
                  </div>
                </Link>
                <div className="rounded-full w-10 h-10 border border-[#32BEA6] items-center justify-center cursor-pointer flex ">
                  <User className="text-[#99f1e2]" />
                </div>
                {!open ? (
                  <div
                    className=" w-10 h-10  items-center justify-center cursor-pointer flex sm:hidden"
                    onClick={() => setOpen(!open)}
                  >
                    <Menu className="text-[#32BEA6]" />
                  </div>
                ) : (
                  <div
                    className=" w-10 h-10  items-center justify-center cursor-pointer flex sm:hidden"
                    onClick={() => setOpen(!open)}
                  >
                    <X className="text-[#32BEA6]" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
