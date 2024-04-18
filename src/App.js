import logo from './images/logo.svg';
import logoFooter from './images/logo-footer.svg';

import { easyBank, latestArticles } from './easyBank';

import facebook from './images/icon-facebook.svg';
import youtube from './images/icon-youtube.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';

export default function App() {
  return (
    <div className="font-Sans text-center">
      <EasyBankApp />
    </div>
  );
}

function EasyBankApp() {
  return (
    <div>
      <Header logo={logo} />
      <NextGen />
      <EasyBank />
      <Articles />
      <Footer
        logo={logoFooter}
        facebook={facebook}
        twitter={twitter}
        youtube={youtube}
        pinterest={pinterest}
        instagram={instagram}
      />
    </div>
  );
}

function Header({ logo }) {
  return (
    <header className="w-full flex flex-row bg-white justify-between py-3 px-5 fixed z-10">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <img src="./images/icon-hamburger.svg" alt="menu" className="w-10 h-4 cursor-pointer" />
    </header>
  );
}

function NextGen() {
  return (
    <div className="relative flex flex-col justify-center items-center mb-32">
      <img src="./images/bg-intro-mobile.svg" alt="intro" className="w-full" />
      <img
        src="./images/image-mockups.png"
        alt="mockupImage"
        className="sm:h-[30rem] m-auto absolute top-[-100px] p-5 w-auto"
      />

      <h1 className="text-[2.5rem] text-blue font-light leading-normal w-auto mx-auto">
        Next generation digital banking
      </h1>
      <p className="text-gray-300 py-[2rem] w-auto mx-auto px-12 text-base text-justify">
        Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
        saving, budgeting, investing, and much more.
      </p>
      <div className=" bg-gradient-to-r from-green to-cyan text-white px-9 py-3 rounded-full cursor-pointer">
        Request Invite
      </div>
    </div>
  );
}

function EasyBank() {
  return (
    <div className="bg-gray-200 py-20 px-3">
      <h1 className="text-[3rem] text-blue font-light leading-[1.2] px-auto">
        Why choose Easybank?
      </h1>
      <p className="text-gray-300 py-[2rem] px-[1.5rem] text-base text-center">
        We leverage Open Banking to turn your bank account into your financial hub. Control your
        finances like never before.
      </p>
      <div>
        {easyBank.map((bank) => (
          <Bank image={bank.image} title={bank.title} text={bank.text} key={bank.title} />
        ))}
      </div>
    </div>
  );
}

function Bank({ image, title, text }) {
  return (
    <div>
      <div className="flex justify-center p-5">
        <img src={image} alt="" />
      </div>
      <h2 className="text-[1.5rem] ">{title}</h2>
      <p className="text-gray-300 py-[2rem] px-[1.5rem] text-base">{text}</p>
    </div>
  );
}

function Articles() {
  return (
    <div className="py-16">
      <h1 className="text-[3rem] text-blue font-light leading-normal px-auto py-8">
        Latest Articles
      </h1>
      <div>
        {latestArticles.map((article) => (
          <Article
            image={article.image}
            author={article.author}
            title={article.title}
            article={article.article}
            alt={article.alt}
            key={article.title}
          />
        ))}
      </div>
    </div>
  );
}

function Article({ image, author, title, article, alt }) {
  return (
    <div className="bg-gray-200 flex flex-col items-center px-5 cursor-pointer">
      <img src={image} alt={alt} className="w-auto mx-auto rounded-t-[0.5rem]" />
      <div className="bg-white text-start p-10">
        <p className="font-light text-[0.25rem] text-gray-300">By {author}</p>
        <h2
          className="text-blue text-base
         hover:text-green"
        >
          {title}
        </h2>
        <p className="font-light text-[0.7rem] text-gray-300">{article}</p>
      </div>
    </div>
  );
}

function Footer({ logo, facebook, twitter, youtube, pinterest, instagram }) {
  return (
    <footer className="bg-blue text-white  flex flex-col justify-center items-center py-10">
      <div className="py-7">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex  space-x-5">
          <li>
            <a href="#facebook">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#youtube">
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="#twitter">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#pinterest">
              <img src={pinterest} alt="pinterest" />
            </a>
          </li>
          <li>
            <a href="#instagram">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="py-5">
          <li className="py-2 hover:text-green">
            <a href="#aboutUs">About Us</a>
          </li>
          <li className="py-2 hover:text-green">
            <a href="#contact">Contact</a>
          </li>
          <li className="py-2 hover:text-green">
            <a href="#blog">Blog</a>
          </li>
          <li className="py-2 hover:text-green">
            <a href="#careers">Careers</a>
          </li>
          <li className="py-2 hover:text-green">
            <a href="#support">Support</a>
          </li>
          <li className="py-2 hover:text-green">
            <a href="#privacypolicy">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div class="bg-gradient-to-r from-green to-cyan  px-9 py-3 my-5 rounded-full cursor-pointer ">
        Request Invite
      </div>
      <p className="text-gray-300">&copy; EasyBank. All Rights Reserved</p>
    </footer>
  );
}
