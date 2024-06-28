import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>

      <NavBar />
      <hr />

      <Outlet />
    </UserProvider>
  );
};
