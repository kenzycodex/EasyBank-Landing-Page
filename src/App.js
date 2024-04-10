import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Hamburger } from './images/icon-hamburger.svg';
import { ReactComponent as IntroMobile } from './images/bg-intro-mobile.svg';
// import { ReactComponent as IntroDesktop } from './images/bg-intro-desktop.svg';
import { ReactComponent as Online } from './images/icon-online.svg';
import { ReactComponent as Budget } from './images/icon-budgeting.svg';
import { ReactComponent as Onboarding } from './images/icon-onboarding.svg';
import { ReactComponent as Api } from './images/icon-api.svg';
import { ReactComponent as Facebook } from './images/icon-facebook.svg';
import { ReactComponent as Youtube } from './images/icon-youtube.svg';
import { ReactComponent as Twitter } from './images/icon-twitter.svg';
import { ReactComponent as PInterest } from './images/icon-pinterest.svg';
import { ReactComponent as Instagram } from './images/icon-instagram.svg';
// import { useMediaQuery } from 'react-responsive';

export default function App() {
  return (
    <div className="font-Sans text-center">
      <Header />
      <NextGen />
      <EasyBank />
      <Articles />
      {/* <Footer /> */}
    </div>
  );
}

function Header() {
  return (
    <header className="fixed w-full flex flex-row bg-white justify-between border-4 p-5 z-10">
      <Logo />
      <div className="cursor-pointer">
        <Hamburger />
      </div>
    </header>
  );
}

function NextGen() {
  return (
    <div className="relative flex flex-col justify-center items-center  mb-14">
      <IntroMobile className="w-full" />
      <img
        src={require('./images/image-mockups.png')}
        alt="mockupImage"
        className="h-[54%] m-auto absolute top-[-3.5rem]"
      />

      <h1 className="text-[3rem] text-blue font-light leading-normal px-auto">
        Next generation digital banking
      </h1>
      <p className="text-gray-300 py-[2rem] text-base">
        Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
        saving, budgeting, investing, and much more.
      </p>
      <div className=" bg-gradient-to-r from-green to-cyan text-white px-9 py-3 rounded-full">
        Request Invite
      </div>
    </div>
  );
}

function EasyBank() {
  return (
    <div className="bg-gray-200 py-10">
      <h1 className="text-[3rem] text-blue font-light leading-normal px-auto">
        Why choose Easybank?
      </h1>
      <p className="text-gray-300 py-[2rem] text-base">
        We leverage Open Banking to turn your bank account into your financial hub. Control your
        finances like never before.
      </p>
      <div>
        <div>
          <div className="flex justify-center">
            <Online />
          </div>
          <h2 className="text-[1.5rem]">Online Banking</h2>
          <p className="text-gray-300 py-[2rem] text-base">
            Our modern web and mobile applications allow you to keep track of your finances wherever
            you are in the world.
          </p>
        </div>
        <div>
          <div className="flex justify-center pb-5">
            <Budget />
          </div>
          <h2 className="text-[1.5rem]">Simple Budgeting</h2>
          <p className="text-gray-300 py-[2rem] text-base">
            See exactly where your money goes each month. Receive notifications when you’re close to
            hitting your limits.
          </p>
        </div>
        <div>
          <div className="flex justify-center pb-5">
            <Onboarding />
          </div>
          <h2 className="text-[1.5rem]">Fast Onboarding</h2>
          <p className="text-gray-300 py-[2rem] text-base">
            We don’t do branches. Open your account in minutes online and start taking control of
            your finances right away.
          </p>
        </div>
        <div>
          <div className="flex justify-center pb-5">
            <Api />
          </div>
          <h2 className="text-[1.5rem]">Open API</h2>
          <p className="text-gray-300 py-[2rem] text-base">
            Manage your savings, investments, pension, and much more from one account. Tracking your
            money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
}

function Articles() {
  return (
    <div className="pt-8">
      <h2 className="text-[2rem] py-8">Latest Articles</h2>
      <div className="flex flex-col items-center w-[90%] mx-auto border-gray-300">
        <div className="w-full">
          <img src={require('./images/image-currency.jpg')} alt="currency" />
          <div className="text-left px-10">
            <p className="font-light text-[1rem] text-gray-300">By Claire Robinson</p>
            <h3>Receive money in any currency with no fees</h3>
            <p>
              The world is getting smaller and we’re becoming more mobile. So why should you be
              forced to only receive money in a single …
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="w-[90%] px-auto">
          <img src={require('./images/image-restaurant.jpg')} alt="restaurant" />
          <div className="text-left">
            <p className="font-light text-[1rem] text-gray-300">By Claire Robinson</p>
            <h3>Receive money in any currency with no fees</h3>
            <p>
              The world is getting smaller and we’re becoming more mobile. So why should you be
              forced to only receive money in a single …
            </p>
          </div>
        </div>
      </div> */}
      {/* <div>
        <div className="w-[90%] px-auto">
          <img src={require('./images/image-plane.jpg')} alt="plane" />
          <div className="">
            <p className="font-light text-[1rem] text-gray-300">By Wilson Hutton</p>
            <h3>Treat yourself without worrying about money</h3>
            <p>
              Our simple budgeting feature allows you to separate out your spending and set
              realistic limits each month. That means you …
            </p>
          </div>
        </div>
      </div> */}
      {/* <div>
        <div>
          <img src={require('./images/image-currency.jpg')} alt="currency" />
          <div className="px-5">
            <p className="font-light text-[1rem] text-gray-300">By Wilson Hutton</p>
            <h3>Take your Easybank card wherever you go</h3>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any fees on purchases
              while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>
      </div> */}
      {/* <div>
        <div>
          <img src={require('./images/image-confetti.jpg')} alt="confetti" />
          <div>
            <p className="font-light text-[1rem] text-gray-300">By Claire Robinson</p>
            <h3> Our invite-only Beta accounts are now live!</h3>
            <p>
              After a lot of hard work by the whole team, we’re excited to launch our closed beta.
              It’s easy to request an invite through the site ...
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

// function Footer() {
//   return (
//     <footer>
//       <Logo style={{}} />
//       <div>
//         <Facebook />
//         <Youtube />
//         <Twitter />
//         <PInterest />
//         <Instagram />
//       </div>
//       <div></div>
//       <div>Request Invite</div>
//       <p>&copy; Easybank. All Rights Reserved</p>
//     </footer>
//   );
// }
