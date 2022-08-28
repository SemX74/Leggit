import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import CreatePost from "../Components/CreatePost/CreatePost";

import Post from "../Components/Post/Post";
import SortBy from "../Components/SortBy/SortBy";
import { useAppSelector } from "../Hooks/ReduxHook";
import { useAuth } from "../Hooks/useAuth";
import { IPostValue } from "../Slices/PostSlice";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const posts: IPostValue[] = useAppSelector((state) => state.posts.value);
  const Auth = useAuth()
  return (
    <div className="Home">
      <main className="Home-Main">
        {Auth?.user && <CreatePost />}
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
            id={post.id}
            score={0}
            created={String(post.created)}
          />
        ))}
        <Outlet />
      </main>
      <SortBy />
    </div>
  );
};

export default Home;
