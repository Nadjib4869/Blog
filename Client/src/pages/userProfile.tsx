import { useParams, Link } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useQuery } from "react-query";

interface Post {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  category: string;
  imageCover: string;
}

interface UserData {
  id: string;
  name: string;
  photo: string;
  email: string;
  createdAt: string;
  posts: Post[];
}

export default function UserProfile() {
  const { userId } = useParams<{ userId: string }>();

  const getUserAndPosts = async (): Promise<UserData> => {
    const res = await axiosInstance.get(`/users/${userId}`);
    return res.data.data.doc; // Adjust based on your API response structure
  };

  const { isLoading, isError, data, error } = useQuery<UserData>(
    ["user&posts", userId],
    getUserAndPosts
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
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
            {data?.posts.map((post) => (
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
            {(!data || data.posts.length === 0) && (
              <div className="">No Published blogs, yet...</div>
            )}
          </div>
          {data && data.posts.length !== 0 && (
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
          src={data ? `http://localhost:8000/img/users/${data.photo}` : ""}
          className="h-20 rounded-full"
          alt="User-photo"
        />
        <div className="mt-2 space-y-2">
          <h2>@Tag</h2>
          <p>{data?.name}</p>
          <p>X Blogs - Y Reads</p>
        </div>
        <div className="space-y-4">
          <p className="mt-8">Description</p>
          <div>Socials</div>
          <p>Joined on Date</p>
        </div>
      </div>
    </div>
  );
}
