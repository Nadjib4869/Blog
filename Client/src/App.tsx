import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/navbar";
import Home from "./pages/home";
import Blog from "./pages/blog";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import FilteredBlogs from "./pages/filteredBlogs";
import Contact from "./pages/contact";
import NoPage from "./pages/noPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="filtered-blogs" element={<FilteredBlogs />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
