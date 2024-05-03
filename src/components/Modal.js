export function Modal() {
  return (
    <div className="text-center absolute z-10 top-[4.1rem] left-0 bg-blue/80 h-full w-full desktop:hidden">
      <div className="fixed z-30 top-[15%] left-1/2 -translate-x-1/2 bg-white text-blue w-4/5 mx-auto py-8 tablet:py-10 rounded-md ">
        <ul className="flex flex-col gap-6">
          <li>
            <a href="#home" className="hover:text-green/80">
              Home
            </a>
          </li>
          <li>
            <a href="#company" className="hover:text-green/80">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green/80">
              Contact
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-green/80">
              Blog
            </a>
          </li>
          <li>
            <a href="#careers" className="hover:text-green/80">
              Careers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
