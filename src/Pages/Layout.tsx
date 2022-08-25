import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";
import TopBar from "../Components/TopBar/TopBar";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className="App">
      <TopBar />
      <div className="Content-split">
        <div className="SideMenu">
          <SideBar />
        </div>
        <div className="Outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
