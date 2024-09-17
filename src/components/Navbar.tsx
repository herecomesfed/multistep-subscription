import { useLocation } from "react-router-dom";

interface StageTypes {
  path: string;
  id: number;
  label: string;
}

export default function Navbar({ stages }: { stages: StageTypes[] }) {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  function checkActiveUrl(path: string) {
    return path === pathname;
  }
  return (
    <div
      className={`mx-breakout md:clean-breakout py-16 md:rounded-lg bg-sidebar-mobile md:bg-sidebar-desktop bg-center bg-no-repeat bg-cover`}
    >
      <div className="container w-4/5 mx-auto flex justify-center items-center md:items-start gap-3 md:gap-6 md:flex-col">
        {stages.map((stage: StageTypes) => {
          return (
            <div key={stage.id} className="flex items-center gap-2">
              <div
                className={`relative w-8 aspect-square border-2 rounded-full p-3 text-xs ${
                  checkActiveUrl(stage.path)
                    ? "text-marine-blue bg-light-blue border-light-blue"
                    : "text-white"
                }`}
              >
                <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold">
                  {stage.id}
                </span>
              </div>
              <div className="hidden md:block">
                <p className="text-xs uppercase">Step {stage.id}</p>
                <h3 className="uppercase text-white font-bold">
                  {stage.label}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
