import HeroText from "./HeroText";
import HeroCharacter from "./HeroCharacter";

export default function Hero() {
  return (
    <section className="min-h-[85svh] lg:min-h-screen flex items-center px-4 md:px-8 py-12 lg:py-0">
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

            <div className="hidden lg:flex flex-1 justify-end w-full">
                <HeroCharacter />
            </div>
        </div>
    </section>
  );
}