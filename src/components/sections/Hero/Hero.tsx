import HeroText from "./HeroText";
import HeroCharacter from "./HeroCharacter";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8">
        <div
            className="
                mx-auto
                flex
                w-full
                max-w-7xl
                items-center
                justify-between
                gap-8
                lg:gap-16
            "
        >
            <div className="flex-1">
                <HeroText />
            </div>

            <div className="hidden lg:flex flex-1 justify-end">
                <HeroCharacter />
            </div>
        </div>
    </section>
  );
}