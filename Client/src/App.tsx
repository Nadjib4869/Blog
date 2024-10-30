import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import PrivateRoute from "./components/privateRoute";
import Layout from "./components/navbar";
import Home from "./pages/home";
import Blog from "./pages/blog";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import FilteredBlogs from "./pages/filteredBlogs";
import WritePage from "./pages/writePage";
import Dashboard from "./pages/dashboard";
import UserProfile from "./pages/userProfile";
import EditProfile from "./pages/editProfile";
import Contact from "./pages/contact";
import NoPage from "./pages/noPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="posts/:postId" element={<Blog />} />
              <Route path="users/:userId" element={<UserProfile />} />
              <Route path="filtered-blogs" element={<FilteredBlogs />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route
                path="write-page"
                element={<PrivateRoute element={<WritePage />} />}
              />
              <Route
                path="dashboard"
                element={<PrivateRoute element={<Dashboard />} />}
              />
              <Route
                path="editProfile"
                element={<PrivateRoute element={<EditProfile />} />}
              />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
