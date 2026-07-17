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
    <div className="flex flex-col md:flex-row justify-center items-start gap-2 md:gap-6 mx-auto overflow-x-auto no-scrollbar">
      <pre className="text-slate-300 font-mono leading-none cursor-text select-text text-[0.45rem] sm:text-[0.65rem] md:text-[1.15rem]">
        {rahini}
      </pre>
      <pre className="text-slate-300 font-mono leading-none cursor-text select-text text-[0.45rem] sm:text-[0.65rem] md:text-[1.15rem]">
        {raneru}
      </pre>
    </div>
  );
}