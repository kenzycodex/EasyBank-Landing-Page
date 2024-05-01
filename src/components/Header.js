import { RequestInvite } from './RequestInvite';

export function Header() {
  return (
    <header className="relative flex mobile:flex-col desktop:flex-row-reverse justify-center items-center">
      <div className="w-full relative overflow-x-hidden">
        <img src="./images/bg-intro-mobile.svg" alt="intro" className="w-full desktop:hidden" />
        <img
          src="./images/bg-intro-desktop.svg"
          alt="intro"
          className="hidden desktop:block w-full relative top-[-7rem] right-[-10rem]"
        />
        <div>
          <img
            src="./images/image-mockups.png"
            alt="mockupImage"
            className="desktop:w-[36.5rem] m-auto absolute p-5 mobile:h-[33rem] md:h-[55rem] desktop:h-full mobile:top-[-7.55rem] desktop:top-0 desktop:right-[-7rem]"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center py-14 desktop:ml-[7rem]">
        <div className="flex flex-col justify-center mobile:items-center desktop:items-start">
          <h1 className="text-[2.5rem] desktop:text-[4rem] desktop:text-start font-light leading-normal mx-auto">
            Next generation digital banking
          </h1>
          <p className="text-gray-300 py-[1.5rem] w-full mx-auto px-5 desktop:px-0 text-base desktop:text-[1.2rem] mobile:text-start desktop:text-justify ">
            Take your financial life online. Your Easybank account will be a one-stop-shop for
            spending, saving, budgeting, investing, and much more.
          </p>
          <RequestInvite />
        </div>
      </div>
    </header>
  );
}
