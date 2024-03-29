import logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";
import { currentUser, logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ModeToggle } from "../modeToggle/ModeToggle";
import { Button } from "../ui/button";

const Navbar = () => {
  const user = useAppSelector(currentUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header className="h-14 py-16">
      <nav className="h-full w-full max-w-[1300px] px-5 mx-auto flex justify-between items-center sticky top-0">
        <NavLink to="/">
          <img className="w-[120px] h-auto" src={logo} />
        </NavLink>
        <ul className="space-x-5   hidden md:block">
          <NavLink
            className={({ isActive }) =>
              cn(
                "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                {
                  " bg-tangerine text-white": isActive,
                }
              )
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              cn(
                "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                {
                  " bg-tangerine text-white": isActive,
                }
              )
            }
            to="/supplies"
          >
            All Supplies
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger className="font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded">
              <span className="inline-block">About Us</span>{" "}
              <ChevronDown className="inline-block" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="  bg-light-tangerine rounded-xl p-2">
              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                      {
                        " bg-tangerine text-white": isActive,
                      }
                    )
                  }
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                      {
                        " bg-tangerine text-white": isActive,
                      }
                    )
                  }
                  to="/leader-board"
                >
                  Leader board
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                      {
                        " bg-tangerine text-white": isActive,
                      }
                    )
                  }
                  to="/community"
                >
                  Community
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                      {
                        " bg-tangerine text-white": isActive,
                      }
                    )
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <NavLink
              className={({ isActive }) =>
                cn(
                  "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                  {
                    " bg-tangerine text-white": isActive,
                  }
                )
              }
              to="/admin/dashboard"
            >
              Dashboard
            </NavLink>
          ) : (
            ""
          )}
        </ul>

        <ModeToggle />

        {user ? (
          <Button
            className="hidden md:block  bg-red-500 hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <NavLink className="hidden md:block" to="/login">
            <Button className="bg-gradient-to-b from-[#EFAB68] to-[#F48E28] text-lg">
              Login
            </Button>
          </NavLink>
        )}

        {/* burger  menu button for mobile  */}
        <button className="text-black block md:hidden" onClick={handleOpen}>
          {open ? (
            <X className=" text-tangerine w-7 h-7 " />
          ) : (
            <Menu className=" text-tangerine w-7 h-7 " />
          )}
        </button>
      </nav>

      {
        <ul
          className={`w-full py-10 mt-[80px]  text-center bg-gray flex
           md:hidden flex-col gap-5 absolute transition duration-1000 ease-in-out ${
             open ? "top-0" : "-top-[400px]"
           }`}
        >
          <NavLink
            onClick={handleOpen}
            // className="font-roboto text-[20px] font-medium leading-[150%] tracking-wider"
            className={({ isActive }) =>
              cn(
                "font-roboto text-[20px] font-medium leading-[150%] tracking-wider",
                {
                  " bg-tangerine text-white": isActive,
                }
              )
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            onClick={handleOpen}
            className={({ isActive }) =>
              cn(
                "font-roboto text-[20px] font-medium leading-[150%] tracking-wider",
                {
                  " bg-tangerine text-white": isActive,
                }
              )
            }
            to="/supplies"
          >
            All Supplies
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger className="font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded">
              <span className="inline-block">About Us</span>{" "}
              <ChevronDown className="inline-block" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-light-tangerine rounded-xl p-2">
              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                      {
                        " bg-tangerine text-white": isActive,
                      }
                    )
                  }
                  to="/about-us"
                >
                  About Us
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                      {
                        " bg-tangerine text-white": isActive,
                      }
                    )
                  }
                  to="/leader-board"
                >
                  Leader board
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                      {
                        " bg-tangerine text-white": isActive,
                      }
                    )
                  }
                  to="/community"
                >
                  Community
                </NavLink>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "font-roboto text-[18px] font-medium leading-[150%] px-3 py-1 rounded",
                      {
                        " bg-tangerine text-white": isActive,
                      }
                    )
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <NavLink
              onClick={handleOpen}
              className={({ isActive }) =>
                cn(
                  "font-roboto text-[20px] font-medium leading-[150%] tracking-wider",
                  {
                    " bg-tangerine text-white": isActive,
                  }
                )
              }
              to="/admin/dashboard"
            >
              Dashboard
            </NavLink>
          ) : (
            ""
          )}

          {user ? (
            <span className="" onClick={handleLogout}>
              Logout
            </span>
          ) : (
            <NavLink to="/login">
              <span>Login</span>
            </NavLink>
          )}
        </ul>
      }
    </header>
  );
};

export default Navbar;
