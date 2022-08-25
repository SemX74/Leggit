import { FC } from "react";
import { CgProfile } from "react-icons/cg";

interface PostHeaderProps {
    
}
 
const PostHeader: FC<PostHeaderProps> = () => {
    return (
        <header className="Post-Header">
          <div className="Post-Header-Info_wrapper">
            <CgProfile />
            <p className="Post-Header_Info">
              JuiceWrlD
              <span>{" • "}Posted by u/Raging_Hope 16 hours ago</span>
            </p>
          </div>
          <button className="button">Join</button>
        </header>
      );
}
 
export default PostHeader;