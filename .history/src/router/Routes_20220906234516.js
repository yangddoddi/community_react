import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Join } from "../pages/Join";
import { Login } from "../pages/Login";
import { PostItem } from "../pages/PostItem";
import { PostList, Posts } from "../pages/Posts";
import { Write } from "../pages/Write";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/posts/:id/write" element={<Write />} />
      <Route path="/posts/:id" element={<PostItem />} />
      <Route path="/posts/:category" element={<PostList />} />
      <Route path="/posts/:category" element={<PostList />} />
      <Route path="/posts/:category" element={<PostList />} />
    </Routes>
  );
};
