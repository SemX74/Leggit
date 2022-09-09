import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import "./Profile.css";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const Auth = useAuth();
  const navigate = useNavigate();
  return (
    <section className="Profile">
      <figure>
        <img src="" alt="" />
      </figure>
      <article>
        <h1 style={{ fontSize: "20px" }}>{Auth?.user?.username}</h1>
        <p style={{ opacity: "50%" }}>{Auth?.user?.email}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          velit ut saepe, esse a voluptate sunt vitae sed expedita soluta?
        </p>
      </article>
      <div className="buttons_wrapper">
        <button
          onClick={() => navigate("/profileSettings", { replace: true })}
          className="button"
        >
          Update profile info
        </button>
      </div>
    </section>
  );
};

export default Profile;
