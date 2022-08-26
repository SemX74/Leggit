import { FC } from "react";
import { CgProfile } from "react-icons/cg";
import TimeAgo from "./SortBy/TimeAgo";

interface PostHeaderProps {
  created: string;
}

const PostHeader: FC<PostHeaderProps> = ({ created }) => {
  return (
    <header className="Post-Header">
      <div className="Post-Header-Info_wrapper">
        <CgProfile />
        <p className="Post-Header_Info">
          JuiceWrlD
          <span>
            {" • "}Posted by u/Raging_Hope <TimeAgo created={created} />
          </span>
        </p>
      </div>
      <button className="button">Join</button>
    </header>
  );
};

export default PostHeader;
