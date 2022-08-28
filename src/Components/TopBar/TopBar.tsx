import { FC, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut, BiUser, BiTrash } from "react-icons/bi";
import {
  BsChevronCompactDown,
  BsMoon,
  BsGithub,
  BsThreeDots,
} from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { TiDocumentText } from "react-icons/ti";
import "./TopBar.css";
import Logo from "../Logo/Logo";
import { useAuth } from "../../Hooks/useAuth";
import { useAppDispatch } from "../../Hooks/ReduxHook";
import { deleteUser } from "../../Slices/UserSlice";
import RegisteredNavs from "./RegisteredNavs";

interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  const Auth = useAuth();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleDelete = () => {
    dispatch(deleteUser(Auth?.user?.userID || ""));
    Auth?.signOut();
  };
  return (
    <header className="Header">
      <Logo />
      <div className="Header-Search_wrapper">
        <input placeholder="🔎Search Leggit ..." type="search" />
      </div>
      {Auth?.user && <RegisteredNavs />}
      {!Auth?.user && (
        <div className="Header-Registration_wrapper">
          <button
            onClick={() => {
              navigate("/login", {
                replace: true,
                state: { from: location.pathname },
              });
            }}
            className="LogIn  button"
          >
            Log In
          </button>
          <button
            onClick={() => {
              navigate("/register", {
                replace: true,
                state: { from: location.pathname },
              });
            }}
            className="SignUp button"
          >
            Sign Up
          </button>
        </div>
      )}
      <div
        onClick={() => setIsOpened((prev) => !prev)}
        className="Header-Profile"
      >
        <div className="Header-Profile-wrapper">
          <VscAccount />
          <BsChevronCompactDown />
        </div>
        {isOpened && (
          <menu className="HeaderMenu">
            <ul className="HeaderMenu_list">
              {Auth?.user && (
                <>
                  <Link className="HeaderMenu_option" to="/">
                    <BiUser />
                    {Auth?.user?.username || "Guest"}
                  </Link>
                  <Link
                    onClick={() => Auth?.signOut()}
                    className="HeaderMenu_option"
                    to="/"
                  >
                    <BiLogOut />
                    Log Out
                  </Link>
                  <Link
                    onClick={handleDelete}
                    style={{ color: "red" }}
                    className="HeaderMenu_option"
                    to="/"
                  >
                    <BiTrash />
                    Delete Account
                  </Link>
                </>
              )}

              <Link className="HeaderMenu_option" to="/*">
                <TiDocumentText />
                Terms & Policies
              </Link>
              <a href="https:\\github.com/Semx74" className="HeaderMenu_option">
                <BsGithub />
                Visit Author
              </a>
              <Link className="HeaderMenu_option" to="/*">
                <BsMoon />
                Dark mode
              </Link>
              <Link className="HeaderMenu_option" to="/*">
                <BsThreeDots />
                Other
              </Link>
            </ul>
          </menu>
        )}
      </div>
    </header>
  );
};

export default TopBar;
