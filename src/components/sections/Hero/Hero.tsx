import HeroText from "./HeroText";
import HeroCharacter from "./HeroCharacter";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8">
        <div
            className="
                mx-auto
                flex
                flex-col
                lg:flex-row
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

            <div className="flex flex-1 justify-center lg:justify-end w-full mt-8 lg:mt-0">
                <HeroCharacter />
            </div>
        </div>
    </section>
  );
}