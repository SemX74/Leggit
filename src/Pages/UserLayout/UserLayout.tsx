import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./UserLayout.css";

interface UserLayoutProps {}

const UserLayout: FC<UserLayoutProps> = () => {
  const buttons: string[] = [
    "overview",
    "posts",
    "comments",
    "saved",
    "hidden",
  ];
  return (
    <div className="UserLayout">
      <header className="UserLayout-header">
        {buttons.map((button) => (
          <NavLink
            to={`/user/${button}`}
            className={({ isActive }) =>
              `UserLayout_NavLink ${isActive && "active"}`
            }
          >
            {button}
          </NavLink>
        ))}
      </header>
      <div className="UserOutlet">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
