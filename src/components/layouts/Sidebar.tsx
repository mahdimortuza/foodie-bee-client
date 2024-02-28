import { cn } from "@/lib/utils";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { CopyPlus, HomeIcon, LayoutDashboard, QrCode } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { ModeToggle } from "../modeToggle/ModeToggle";
import { Button } from "../ui/button";
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <aside className="col-span-2 bg-slate-100 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col gap-5">
        <ModeToggle />

        {/* sidebar navigation link starts here  */}
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "p-3 rounded-sm text-dark-blue transition-all bg-gray flex items-center gap-2",
              {
                " bg-tangerine text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className=" shrink-0" />
          <span className="truncate">Dashboard</span>{" "}
        </NavLink>

        <NavLink
          to="/admin/supplies"
          className={({ isActive }) =>
            cn(
              "p-3 rounded-sm text-dark-blue transition-all bg-gray flex items-center gap-2",
              {
                " bg-tangerine text-white": isActive,
              }
            )
          }
        >
          <QrCode className=" shrink-0" />
          <span className="truncate">All supplies</span>{" "}
        </NavLink>

        <NavLink
          to="/admin/create-supply"
          className={({ isActive }) =>
            cn(
              "p-3 rounded-sm text-dark-blue transition-all bg-gray flex items-center gap-2",
              {
                " bg-tangerine text-white": isActive,
              }
            )
          }
        >
          <CopyPlus className=" shrink-0" />
          <span className="truncate">Create supply</span>
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "p-3 rounded-sm text-dark-blue transition-all bg-gray flex items-center gap-2",
              {
                " bg-tangerine text-white": isActive,
              }
            )
          }
        >
          <HomeIcon className=" shrink-0" />
          <span className="truncate">Return home</span>
        </NavLink>
        <Button className="bg-red-600 hover:bg-red-700" onClick={handleLogOut}>
          Logout
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
