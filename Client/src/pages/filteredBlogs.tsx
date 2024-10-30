import Blogs from "../components/blogs";
import { useSearchParams } from "react-router-dom";

export default function FilteredBlogs() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <div className="flex items-center justify-center h-10 mb-10 text-2xl font-bold bg-red-500">
        {category?.toUpperCase()} Blogs
      </div>
      <Blogs />
    </>
  );
}
