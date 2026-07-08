'use client'

const rahini = 
`██████╗  █████╗ ██╗  ██╗██╗███╗   ██╗██╗
██╔══██╗██╔══██╗██║  ██║██║████╗  ██║██║
██████╔╝███████║███████║██║██╔██╗ ██║██║
██╔══██╗██╔══██║██╔══██║██║██║╚██╗██║██║
██║  ██║██║  ██║██║  ██║██║██║ ╚████║██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝`;
const raneru = 
`██████╗  █████╗ ███╗   ██╗███████╗██████╗ ██╗   ██╗
██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔══██╗██║   ██║
██████╔╝███████║██╔██╗ ██║█████╗  ██████╔╝██║   ██║
██╔══██╗██╔══██║██║╚██╗██║██╔══╝  ██╔══██╗██║   ██║
██║  ██║██║  ██║██║ ╚████║███████╗██║  ██║╚██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝`;

export default function AsciiName() {
  return (
    <div className="flex justify-center items-start gap-6 mx-auto">
      <pre className="text-white font-mono leading-none cursor-text select-text text-[0.9rem] md:text-[1.15rem]">
        {rahini}
      </pre>
      <pre className="text-white font-mono leading-none cursor-text select-text text-[0.9rem] md:text-[1.15rem]">
        {raneru}
      </pre>
    </div>
  );
}