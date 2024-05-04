import { RequestInvite } from './RequestInvite';

export function Header() {
  return (
    <header className="desktop:static h-auto w-full flex flex-col desktop:flex-row-reverse overflow-x-clip">
      <div className="w-full relative flex justify-center items-center ">
        <img src="./images/bg-intro-mobile.svg" alt="intro" className="w-full desktop:hidden" />
        <img
          src="./images/bg-intro-desktop.svg"
          alt="intro"
          className="invisible desktop:visible absolute top-[-7.5rem] right-[-4rem]"
        />
        <img
          src="./images/image-mockups.png"
          alt="mockupImage"
          className="absolute top-[-6rem] mobile:top-[-9rem] md:top-[-11rem] desktop:top-[-6rem] desktop:right-[-8rem]"
        />
      </div>

      <div className=" flex flex-col justify-center items-center desktop:items-start pb-10 desktop:py-40 desktop:ml-[7rem] desktop:w-full">
        <h1 className="text-[2.5rem] mobile:text-[3.5rem] md:text-[4rem]  desktop:text-[2.5rem]  font-light mx-auto desktop:mx-0 text-center desktop:text-start ">
          Next generation digital banking
        </h1>
        <p className=" text-gray-300 py-[1.5rem] w-full mx-auto desktop:mx-0 px-5 desktop:px-0  text-base mobile:text-[1.5rem] md:text-[1.85rem] desktop:text-[1rem] text-justify desktop:text-start   ">
          Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing, and much more.
        </p>
        <div>
          <RequestInvite />
        </div>
      </div>
    </header>
  );
}
