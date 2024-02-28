import AdminLayout from "@/components/layouts/AdminLayout";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import ErrorPage from "@/pages/ErrorPage";
import AboutUs from "@/pages/about/AboutUs";
import AllSuppliesManagement from "@/pages/admin/AllSuppliesManagement";
import CreateSupplyManagement from "@/pages/admin/CreateSupplyManagement";
import Dashboard from "@/pages/admin/Dashboard";
import Community from "@/pages/community/Community";
import LeaderBoard from "@/pages/leaderBoard/LeaderBoard";
import Login from "@/pages/login/Login";
import Registration from "@/pages/registration/Registration";
import SupplyDetail from "@/pages/supplyDetail/SupplyDetail";
import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllSupplies from "../pages/allSupplies/AllSupplies";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "supplies",
        element: <AllSupplies />,
      },
      {
        path: "supplies/:id",
        element: <SupplyDetail />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "leader-board",
        element: <LeaderBoard />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <AllSuppliesManagement />,
      },
      {
        path: "create-supply",
        element: <CreateSupplyManagement />,
      },
    ],
  },
]);
export default router;
