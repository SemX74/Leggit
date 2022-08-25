import { FC, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import {
  BsChevronCompactDown,
  BsMoon,
  BsGithub,
  BsThreeDots,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

import { TiDocumentText } from "react-icons/ti";
import "./TopBar.css";
import Logo from "../Logo/Logo";

interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="Header">
      <Logo />

      <div className="Header-Search_wrapper">
        <input placeholder="🔎Search Leggit ..." type="search" />
      </div>
      <div className="Header-Registration_wrapper">
        <button
          onClick={() => {
            navigate("/login", { replace: true });
          }}
          className="LogIn  button"
        >
          Log In
        </button>
        <button
          onClick={() => {
            navigate("/register", { replace: true });
          }}
          className="SignUp button"
        >
          Sign Up
        </button>
      </div>
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
              <Link className="HeaderMenu_option" to="/">
                <TiDocumentText />
                Terms & Policies
              </Link>
              <Link className="HeaderMenu_option" to="/">
                <BsGithub />
                Visit Author
              </Link>
              <Link className="HeaderMenu_option" to="/">
                <BsMoon />
                Dark mode
              </Link>
              <Link className="HeaderMenu_option" to="/">
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
