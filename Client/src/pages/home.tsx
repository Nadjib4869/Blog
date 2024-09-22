import Hero from "../components/hero";
import Footer from "../components/footer";
import Blogs from "../components/blogs";
import { Link } from "react-router-dom";

function home() {
  return (
    <div className="h-full bg-red-500">
      <Hero />
      <div className="w-full bg-blue-500 h-fit">
        <section className="space-y-5 mb-7 px-28">
          <h2>Popular Categories</h2>
          <ul className="flex space-x-5 text-sm">
            <li className="flex items-center justify-center w-20 h-10 bg-yellow-300 rounded-lg cursor-pointer">
              <Link to="filtered-blogs">Coding</Link>
            </li>
            <li className="flex items-center justify-center w-20 h-10 bg-yellow-300 rounded-lg cursor-pointer">
              <Link to="filtered-blogs">Job</Link>
            </li>
            <li className="flex items-center justify-center w-20 h-10 bg-yellow-300 rounded-lg cursor-pointer">
              <Link to="filtered-blogs">Travel</Link>
            </li>
            <li className="flex items-center justify-center w-20 h-10 bg-yellow-300 rounded-lg cursor-pointer">
              <Link to="filtered-blogs">Culture</Link>
            </li>
            <li className="flex items-center justify-center w-20 h-10 bg-yellow-300 rounded-lg cursor-pointer">
              <Link to="filtered-blogs">Learning</Link>
            </li>
          </ul>
        </section>
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}

export default home;