import Footer from "../components/footer";

export default function signup() {
  return (
    <div className="w-full h-full">
      <form
        action=""
        className="flex flex-col items-center justify-center bg-green-400 h-[calc(100vh-56px-160px)]"
      >
        <div className="px-10 space-y-2 bg-red-500 border-2 rounded-lg h-4/5">
          <h1 className="text-2xl font-semibold">Create Account</h1>
          <div>
            <p>Name</p>
            <input
              type="text"
              placeholder="name"
              className="px-3 py-1 rounded-md"
            />
          </div>
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
          <div>
            <p>Password Confirm</p>
            <input
              type="password"
              placeholder="********"
              className="px-3 py-1 rounded-md"
            />
          </div>
          <button className="px-3 py-1 bg-green-300 rounded-2xl">SIGNUP</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
