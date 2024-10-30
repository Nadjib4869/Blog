import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Post from "../../public/img/posts/post.jpg";
import Aside from "../components/aside";
import { useQuery } from "react-query";
import axiosInstance from "../api/axiosInstance";

interface Post {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  category: string;
  imageCover: string;
}

export default function Blogs() {
  const [searchParams] = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  //const queryClient = useQueryClient();
  const getPosts = async (): Promise<Post[]> => {
    const res = await axiosInstance.get("/posts");
    return res.data.data.data;
  };

  const { isLoading, isError, data, error } = useQuery<Post[]>(
    "posts",
    getPosts
  );

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  console.log(data);
  console.log("Type of data:", typeof data);

  useEffect(() => {
    const category = searchParams.get("category");

    if (category) {
      setFilteredPosts(
        data?.filter((post: Post) => post.category === category) || []
      );
    } else {
      setFilteredPosts(data || []);
    }
  }, [searchParams, data]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {(error as Error).message}</span>;
  }

  const handleNext = () => {
    if (data && currentPage * postsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const selectedPosts = data
    ? filteredPosts.slice(startIndex, startIndex + postsPerPage)
    : [];

  return (
    <>
      <section className="flex justify-between mb-12 space-x-10 px-28">
        <div className="w-2/3 space-y-7">
          <h2>Recent Blogs</h2>
          <div className="space-y-10 blogs">
            {selectedPosts.map((post: Post) => (
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
            ))}
            <div className="flex space-x-10 blog">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  at sed veritatis minima.
                </p>
                <button className="text-xs underline underline-offset-4">
                  <Link to="/posts/postId">Read More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <button
              className="w-20 h-8 text-sm rounded-md cursor-pointer bg-fuchsia-500"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="w-20 h-8 text-sm rounded-md cursor-pointer bg-fuchsia-500"
              onClick={handleNext}
              disabled={!data || currentPage * postsPerPage >= data.length}
            >
              Next
            </button>
          </div>
        </div>
        <Aside />
      </section>
    </>
  );
}
