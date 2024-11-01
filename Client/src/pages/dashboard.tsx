import { Link } from "react-router-dom";
import Post from "../../public/img/posts/post.jpg";
import { useQuery } from "react-query";
import { useAuth } from "../context/authContext";
import axiosInstance from "../api/axiosInstance";

interface Post {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  category: string;
  imageCover: string;
}

export default function Dashboard() {
  const { user, loading } = useAuth();

  const getPosts = async (): Promise<Post[]> => {
    try {
      const res = await axiosInstance.get("/posts/my-posts");
      return res.data.data.data;
    } catch (err) {
      console.error("error fetching posts", err);
      return [];
    }
  };

  const { isLoading, isError, data, error } = useQuery<Post[]>(
    "posts",
    getPosts,
    {
      enabled: !loading && !!user,
    }
  );

  if (loading || isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>;
  }

  return (
    <div className="flex justify-between h-full my-10 px-44 bg-slate-500">
      <div className="w-10/12 bg-red-500">
        <h2 className="underline underline-offset-[17px] mb-3 decoration-2">
          Published Blogs
        </h2>
        <hr />
        <div className="w-11/12 mt-8 bg-green-500 space-y-7">
          <div className="space-y-10 blogs">
            {data?.map((post) => (
              <div key={post.id} className="flex space-x-10 blog">
                <img
                  src={`http://localhost:8000/img/posts/${post.imageCover}`}
                  className="h-[250px] w-[350px]"
                  alt="blog-photo"
                />
                <div className="flex flex-col items-start justify-center space-y-5">
                  <p className="text-xs">
                    {new Date(post.createdAt).toLocaleString("en-us", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    <span className="text-red-700">
                      {post.category.toUpperCase()}
                    </span>
                  </p>
                  <h2>{post.title}</h2>
                  <p className="text-xs">{post.description}</p>
                  <button className="text-xs underline underline-offset-4">
                    <Link to={`/posts/${post._id}`}>Read More</Link>
                  </button>
                </div>
              </div>
            ))}{" "}
            {(!data || data.length === 0) && (
              <div className="">No Published blogs, yet...</div>
            )}
            {/*<div className="flex space-x-10 blog">
              <img
                src={Post}
                className="h-[250px] w-[350px]"
                alt="blog-photo"
              />
              <div className="flex flex-col items-start justify-center space-y-5">
                <p className="text-xs">
                  2024-10-08 - <span className="text-red-700">CODING</span>
                </p>
                <h2>Easiest Way for React State Management</h2>
                <p className="text-xs">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  at sed veritatis minima
                </p>
                <button className="text-xs underline underline-offset-4">
                  <Link to="/blog">Read More</Link>
                </button>
              </div>
            </div>*/}
          </div>
          {data && data.length !== 0 && (
            <div className="flex justify-between w-full px-4">
              <button className="w-20 h-8 text-sm rounded-md bg-fuchsia-500">
                Previous
              </button>
              <button className="w-20 h-8 text-sm rounded-md bg-fuchsia-500">
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start mt-16">
        <img
          src={user ? `http://localhost:8000/img/users/${user.user.photo}` : ""}
          className="h-20 rounded-full"
          alt="User-photo"
        />
        <div className="mt-2 space-y-2">
          <h2>@Tag</h2>
          <p>{user.user.name}</p>
          <p>X Blogs - Y Reads</p>
        </div>
        <button className="px-2 py-1 mt-8 bg-red-600 rounded-lg">
          <Link to="/editProfile">Edit Profile</Link>
        </button>
        <div className="space-y-4">
          <p className="mt-8">Description</p>
          <div>Socials</div>
          <p>Joined on Date</p>
        </div>
      </div>
    </div>
  );
}
