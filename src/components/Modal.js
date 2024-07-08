export function Modal() {
  return (
    <section className=" fixed top-[4rem] left-0 z-10 backdrop-blur-lg bg-blue/80 h-full w-full desktop:hidden">
      <nav className="fixed z-30 top-[25%] left-[50%] -translate-x-1/2 bg-white text-blue w-[80%] mx-auto py-8 md:py-10 rounded-lg ">
        <ul className="flex flex-col items-center gap-6">
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
      </nav>
    </section>
  );
}
