import { Children, FC } from "react";
import { BiComment, BiShareAlt, BiBookmark } from "react-icons/bi";
import { TbDots } from "react-icons/tb";
interface PostFooterProps {
    children?: JSX.Element;
}

const PostFooter: FC<PostFooterProps> = ({children}) => {
  return (
    <footer className="Post-Footer">
      <button className="Post-Footer_button">
        <BiComment /> Comments
      </button>
      <button className="Post-Footer_button">
        <BiShareAlt /> Share
      </button>
      <button className="Post-Footer_button">
        <BiBookmark /> Save
      </button>
      <button className="Post-Footer_button">
        <TbDots />
      </button>
      {children}
    </footer>
  );
};

export default PostFooter;
