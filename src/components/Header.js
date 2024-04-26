export function Header() {
  return (
    <header className="relative flex mobile:flex-col desktop:flex-row-reverse justify-center items-center desktop:pl-36">
      <div className="w-full relative overflow-x-hidden">
        <img src="./images/bg-intro-mobile.svg" alt="intro" className="w-full desktop:hidden" />
        <img
          src="./images/bg-intro-desktop.svg"
          alt="intro"
          className="hidden desktop:block relative top-[-6.5rem] right-[-10rem]"
        />
        <div>
          <img
            src="./images/image-mockups.png"
            alt="mockupImage"
            className="desktop:w-[50rem] m-auto absolute p-5 mobile:h-[33rem] desktop:h-full mobile:top-[-7.55rem] desktop:top-0 desktop:right-[-9rem]"
          />
        </div>
      </div>
      <div className="w-full pb-10 desktop:w-1/2">
        <h1 className="text-[2.5rem] desktop:text-[3rem] desktop:text-start font-light leading-normal w-auto mx-auto">
          Next generation digital banking
        </h1>
        <p className="text-gray-300 py-[2rem] w-auto mx-auto px-5 desktop:px-0 desktop:text-[1.3rem] text-base text-justify desktop:text-wrap">
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing, and much more.
        </p>
        <div className="w-1/2 bg-gradient-to-r from-green to-cyan text-white px-9 py-3 mx-auto rounded-full cursor-pointer desktop:mx-0 hover:opacity-40 ">
          Request Invite
        </div>
      </div>
    </header>
  );
}
