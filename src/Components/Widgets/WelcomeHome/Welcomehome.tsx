import { FC, Fragment } from "react";
import "./WelcomeHome.css";
import "../../../Style/App.css";

interface WelcomeHomeProps {}

const WelcomeHome: FC<WelcomeHomeProps> = () => {
  return (
    <section className="WelcomeHome">
      <figure className="WelcomeHome_figure">
        <img src="" alt="" />
      </figure>
      <article className="WelcomeHome_artice">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          velit ut saepe, esse a voluptate sunt vitae sed expedita soluta?
        </p>
      </article>
      <div className="buttons_wrapper">
        <button className="button">Create Post</button>
        <button className="button">Create Community</button>
      </div>
    </section>
  );
};

export default WelcomeHome;
