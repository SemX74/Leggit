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

import RegisteredNavs from "./RegisteredNavs";
import RegisteredMenu from "./RegisteredMenu";
import LoggingButtons from "./LoggingButtons";

interface TopBarProps {}

const TopBar: FC<TopBarProps> = () => {
  const [isOpened, setIsOpened] = useState(false);
  const Auth = useAuth();

  return (
    <header className="Header">
      <Logo />
      <div className="Header-Search_wrapper">
        <input placeholder="🔎Search Leggit ..." type="search" />
      </div>
      {Auth?.user && <RegisteredNavs />}
      {!Auth?.user && <LoggingButtons />}
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
              {Auth?.user && <RegisteredMenu />}
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
