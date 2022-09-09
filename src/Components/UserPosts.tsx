import { FC } from "react";
import { useAppSelector } from "../Hooks/ReduxHook";
import { IPostValue } from "../Slices/PostSlice";
import Post from "./Post/Post";
import Profile from "./Widgets/Profile/Profile";

interface UserPostsProps {}

const UserPosts: FC<UserPostsProps> = () => {
  const posts: IPostValue[] = useAppSelector((state) => state.posts.value);
  return (
    <div className="Home">
      <main className="Home-Main">
        {posts && (
          <div className="NoPost">
            <h1>What a pitty! Seems like there's no post!</h1>
          </div>
        )}
        {/* {posts &&
          posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
              id={post.id}
              score={0}
              created={String(post.created)}
            />
          ))} */}
      </main>
      <aside>
        <Profile />
      </aside>
    </div>
  );
};

export default UserPosts;
