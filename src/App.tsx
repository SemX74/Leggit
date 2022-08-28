import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import CreatePostPage from "./Pages/CreatePost/CreatePostPage";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import Popular from "./Pages/Popular";
import SinglePost from "./Pages/SingePost/SinglePost";
import RequireAuth from "./Components/RequireAuth";
import AuthProvider from "./Contexts/AuthProvider";
import "./Style/App.css";

interface AppProps {}
const App: FC<AppProps> = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="popular" element={<Popular />} />
            <Route
              path="addPost"
              element={
                <RequireAuth>
                  <CreatePostPage />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="modal"></Route>
          <Route path="modal/:postid" element={<SinglePost />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
