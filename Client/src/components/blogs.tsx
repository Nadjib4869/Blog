import { Link } from "react-router-dom";
import Post from "../../public/img/posts/post.jpg";
import UserPhoto from "../../public/img/users/user-1.jpeg";

export default function blogs() {
  return (
    <>
      <section className="flex justify-between mb-12 space-x-10 px-28">
        <div className="w-2/3 space-y-7 bg-slate-500">
          <h2>Recent Blogs</h2>
          <div className="space-y-10 blogs">
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  at sed veritatis minima
                </p>
                <button className="text-xs underline underline-offset-4">
                  <Link to="/blog">Read More</Link>
                </button>
              </div>
            </div>
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  at sed veritatis minima
                </p>
                <button className="text-xs underline underline-offset-4">
                  <Link to="/blog">Read More</Link>
                </button>
              </div>
            </div>
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  at sed veritatis minima
                </p>
                <button className="text-xs underline underline-offset-4">
                  <Link to="/blog">Read More</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full px-4">
            <button className="w-20 h-8 text-sm rounded-md bg-fuchsia-500">
              Previous
            </button>
            <button className="w-20 h-8 text-sm rounded-md bg-fuchsia-500">
              Next
            </button>
          </div>
        </div>
        <aside className="flex flex-col w-1/3 space-y-7 bg-slate-300">
          <div>
            <p className="text-xs">What's hot</p>
            <h2>Most Popular</h2>
            <section className="mt-3 space-y-5 bg-slate-500">
              <div className="space-y-1">
                <button className="w-11 h-5 text-xs bg-red-500 rounded-lg text-[11px] text-slate-200">
                  Travel
                </button>
                <h3 className="text-[15px] font-semibold leading-tight">
                  A Journey Through Bohemian Beauty: Exploring the Streets of
                  Prague
                </h3>
                <p className="text-[11px]">
                  <strong>Joseph Owen</strong> - 08.10.2024
                </p>
              </div>
              <div className="space-y-1">
                <button className="w-11 h-5 text-xs bg-red-500 rounded-lg text-[11px] text-slate-200">
                  Travel
                </button>
                <h3 className="text-[15px] font-semibold leading-tight">
                  A Journey Through Bohemian Beauty: Exploring the Streets of
                  Prague
                </h3>
                <p className="text-[11px]">
                  <strong>Joseph Owen</strong> - 08.10.2024
                </p>
              </div>
              <div className="space-y-1">
                <button className="w-11 h-5 text-xs bg-red-500 rounded-lg text-[11px] text-slate-200">
                  Travel
                </button>
                <h3 className="text-[15px] font-semibold leading-tight">
                  A Journey Through Bohemian Beauty: Exploring the Streets of
                  Prague
                </h3>
                <p className="text-[11px]">
                  <strong>Joseph Owen</strong> - 08.10.2024
                </p>
              </div>
            </section>
          </div>
          <div>
            <p className="text-xs">Discover by topic</p>
            <h2>Categories</h2>
            <div className="grid grid-cols-4 gap-2 mt-3 bg-blue-800 w-72">
              <button className="w-16 text-sm bg-red-500 rounded-lg h-7">
                Coding
              </button>
              <button className="w-16 text-sm bg-red-500 rounded-lg h-7">
                Job
              </button>
              <button className="w-16 text-sm bg-red-500 rounded-lg h-7">
                Travel
              </button>
              <button className="w-16 text-sm bg-red-500 rounded-lg h-7">
                Culture
              </button>
              <button className="w-16 text-sm bg-red-500 rounded-lg h-7">
                Learning
              </button>
              <button className="w-16 text-sm bg-red-500 rounded-lg h-7">
                Learning
              </button>
            </div>
          </div>
          <div>
            <p className="text-xs">Chosen by the editor</p>
            <h2>Editors Pick</h2>
            <section className="mt-3 space-y-5 bg-slate-400">
              <div className="flex items-center justify-center space-x-2">
                <div>
                  <img
                    src={UserPhoto}
                    className="w-[88px] rounded-full h-14"
                    alt="User-photo"
                  />
                </div>
                <div className="space-y-1">
                  <button className="w-11 h-5 text-xs bg-red-500 rounded-lg text-[11px] text-slate-200">
                    Travel
                  </button>
                  <h3 className="text-[15px] font-semibold leading-tight">
                    A Journey Through Bohemian Beauty: Exploring the Streets of
                    Prague
                  </h3>
                  <p className="text-[11px]">
                    <strong>Joseph Owen</strong> - 08.10.2024
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div>
                  <img
                    src={UserPhoto}
                    className="w-[88px] rounded-full h-14"
                    alt="User-photo"
                  />
                </div>
                <div className="space-y-1">
                  <button className="w-11 h-5 text-xs bg-red-500 rounded-lg text-[11px] text-slate-200">
                    Travel
                  </button>
                  <h3 className="text-[15px] font-semibold leading-tight">
                    A Journey Through Bohemian Beauty: Exploring the Streets of
                    Prague
                  </h3>
                  <p className="text-[11px]">
                    <strong>Joseph Owen</strong> - 08.10.2024
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div>
                  <img
                    src={UserPhoto}
                    className="w-[88px] rounded-full h-14"
                    alt="User-photo"
                  />
                </div>
                <div className="space-y-1">
                  <button className="w-11 h-5 text-xs bg-red-500 rounded-lg text-[11px] text-slate-200">
                    Travel
                  </button>
                  <h3 className="text-[15px] font-semibold leading-tight">
                    A Journey Through Bohemian Beauty: Exploring the Streets of
                    Prague
                  </h3>
                  <p className="text-[11px]">
                    <strong>Joseph Owen</strong> - 08.10.2024
                  </p>
                </div>
              </div>
            </section>
          </div>
        </aside>
      </section>
    </>
  );
}
