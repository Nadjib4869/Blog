import Blogs from "../components/blogs";

export default function filteredBlogs() {
  return (
    <>
      <div className="flex items-center justify-center h-10 mb-10 text-2xl font-bold bg-red-500">
        Category Blogs
      </div>
      <Blogs />
    </>
  );
}
