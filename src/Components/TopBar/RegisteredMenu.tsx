import { FC } from "react";
import { BiLogOut, BiTrash, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/ReduxHook";
import { useAuth } from "../../Hooks/useAuth";
import { deleteUser } from "../../Slices/UserSlice";

interface RegisteredMenuProps {}

const RegisteredMenu: FC<RegisteredMenuProps> = () => {
  const dispatch = useAppDispatch();
  const Auth = useAuth()

  const handleDelete = () => {
    dispatch(deleteUser(Auth?.user?.userID || ""));
    Auth?.signOut();
  };

  return (
    <>
      <Link className="HeaderMenu_option" to="/user/overview">
        <BiUser />
        <p>
          {Auth?.user?.username || "Guest"}
          <br />
          <p style={{ opacity: "50%" }}>{Auth?.user?.email}</p>
        </p>
        <br />
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
  );
};

export default RegisteredMenu;
