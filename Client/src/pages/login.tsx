import Footer from "../components/footer";

export default function login() {
  return (
    <div>
      <form
        action=""
        className="flex flex-col items-center justify-center bg-green-400 h-[calc(100vh-56px-160px)]"
      >
        <div className="px-10 space-y-2 bg-red-500 border-2 rounded-lg h-2/4">
          <h1 className="text-2xl font-semibold">Log Into Your Account</h1>
          <div>
            <p>Email Address</p>
            <input
              type="email"
              placeholder="you@exemple.com"
              className="px-3 py-1 rounded-md"
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              placeholder="********"
              className="px-3 py-1 rounded-md"
            />
          </div>
          <button className="px-3 py-1 bg-green-300 rounded-2xl">LOGIN</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
