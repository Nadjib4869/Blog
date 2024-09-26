import { CiCircleChevDown } from "react-icons/ci";

interface HeroProps {
  nextSectionRef: React.RefObject<HTMLElement>;
}

export default function Hero({ nextSectionRef }: HeroProps) {

  const handleClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex flex-col items-center justify-center space-y-14 text-6xl font-semibold leading-snug tracking-wide text-white bg-center bg-cover bg-hero-pattern px-44 h-[600px] text-pretty">
      <h1 className="drop-shadow-2xl">
        <strong>Welcome to Our Blog!</strong> Were you Voice Matters, Share what
        you got with the world.
      </h1>
      <button className="" onClick={handleClick}>
        <CiCircleChevDown />
      </button>
    </header>
  );
}
