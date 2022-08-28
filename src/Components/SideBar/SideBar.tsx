import { FC } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { AiTwotoneHome } from "react-icons/ai";
import "./SideBar.css";
import { useAuth } from "../../Hooks/useAuth";
interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  const navigate = useNavigate();
  const Auth = useAuth();
  const location = useLocation();
  return (
    <div className="SideBar">
      <nav className="Nav">
        <div className="Nav-Upper">
          <span className="Nav-Title">Feeds</span>
          <NavLink className="NavLink" to="/">
            <AiTwotoneHome />
            Home
          </NavLink>
          <NavLink className="NavLink" to="/Popular">
            <BsArrowUpRight />
            Popular
          </NavLink>
          <span className="Nav-Title">RECENT COMMUNITIES</span>
          <span className="Nav-Title">Explore</span>
        </div>
        {!Auth?.user && (
          <aside className="Nav-Footer">
            <span className="Nav-Title">Join Leggit</span>
            <p>
              Create an account to follow your favorite communities and start
              taking part in conversations.
            </p>
            <button
              className="button"
              onClick={() => {
                navigate("/register", {
                  replace: true,
                  state: { from: location.pathname },
                });
              }}
            >
              Create an account{" "}
            </button>
          </aside>
        )}
      </nav>
    </div>
  );
};

export default SideBar;
