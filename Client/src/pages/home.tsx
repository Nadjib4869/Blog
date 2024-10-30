import Hero from "../components/hero";
import Footer from "../components/footer";
import Blogs from "../components/blogs";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Home() {
  const nextSectionRef = useRef<HTMLElement>(null);

  return (
    <div className="h-full">
      <Hero nextSectionRef={nextSectionRef} />
      <div className="w-full h-fit">
        <section ref={nextSectionRef} className="mt-5 space-y-5 mb-7 px-28">
          <h2>Popular Categories</h2>
          <ul className="flex space-x-5 text-sm">
            <li className="flex items-center justify-center w-20 h-10 bg-yellow-200 rounded-lg cursor-pointer">
              <Link to={`filtered-blogs?category=coding`}>Coding</Link>
            </li>
            <li className="flex items-center justify-center w-20 h-10 bg-yellow-200 rounded-lg cursor-pointer">
              <Link to={`filtered-blogs?category=job`}>Job</Link>
            </li>
            <li className="flex items-center justify-center w-20 h-10 bg-yellow-200 rounded-lg cursor-pointer">
              <Link to={`filtered-blogs?category=travel`}>Travel</Link>
            </li>
            <li className="flex items-center justify-center w-20 h-10 bg-yellow-200 rounded-lg cursor-pointer">
              <Link to={`filtered-blogs?category=culture`}>Culture</Link>
            </li>
            <li className="flex items-center justify-center w-20 h-10 bg-yellow-200 rounded-lg cursor-pointer">
              <Link to={`filtered-blogs?category=learning`}>Learning</Link>
            </li>
          </ul>
        </section>
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}
