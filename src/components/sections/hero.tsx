"use client";
import { Avatar } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="flex items-center gap-6 min-h-[70vh]">
      {!scrolled && <Avatar size={140} layoutId="avatar-photo" />}
      <div>
        <h1 className="text-4xl font-bold">Hi, I'm Rahini.</h1>
        <p className="mt-2 text-lg text-gray-600">
          Software developer specializing in web applications.
        </p>
        <div className="flex gap-3 mt-4">
          <button className="px-4 py-2 rounded-full bg-black text-white">View Projects</button>
          <button className="px-4 py-2 rounded-full border">Contact Me</button>
        </div>
      </div>
    </section>
  );
}