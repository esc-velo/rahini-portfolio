import HeroText from "./HeroText";
import HeroCharacter from "./HeroCharacter";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen ">
      <HeroText />
      <HeroCharacter />
    </section>
  );
}