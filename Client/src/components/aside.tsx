import UserPhoto from "../../public/img/users/user-1.jpeg";

function aside() {
  return (
    <aside className="flex flex-col w-1/3 space-y-7">
      <div>
        <p className="text-xs">What's hot</p>
        <h2>Most Popular</h2>
        <section className="mt-3 space-y-5">
          <div className="space-y-1">
            <button className="w-11 h-5 text-xs bg-red-500 rounded-lg text-[11px] text-slate-200">
              Travel
            </button>
            <h3 className="text-[15px] font-semibold leading-tight">
              A Journey Through Bohemian Beauty: Exploring the Streets of Prague
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
              A Journey Through Bohemian Beauty: Exploring the Streets of Prague
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
              A Journey Through Bohemian Beauty: Exploring the Streets of Prague
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
        <div className="grid grid-cols-4 gap-2 mt-3 w-72">
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
        <section className="mt-3 space-y-5">
          <div className="flex items-center justify-center space-x-2">
            <img
              src={UserPhoto}
              className="border-2 rounded-full w-14 h-14"
              alt="User-photo"
            />
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
            <img
              src={UserPhoto}
              className="border-2 rounded-full w-14 h-14"
              alt="User-photo"
            />
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
            <img
              src={UserPhoto}
              className="border-2 rounded-full w-14 h-14"
              alt="User-photo"
            />
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
  );
}

export default aside;
