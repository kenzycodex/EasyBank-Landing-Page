import { ReactComponent as Logo } from './images/logo.svg';

import online from './images/icon-online.svg';
import budgeting from './images/icon-budgeting.svg';
import onboarding from './images/icon-onboarding.svg';
import api from './images/icon-api.svg';

const latestArticles = [
  {
    image: './images/image-currency.jpg',
    alt: 'currency',
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    article:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    image: './images/image-restaurant.jpg',
    alt: 'restaurant',
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    article:
      'Our simple budgeting feature allows you to separate out your spending and setrealistic limits each month. That means you …',
  },
  {
    image: './images/image-plane.jpg',
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    article:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
  },
  {
    image: './images/image-confetti.jpg',
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    article:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
  },
];

const easyBank = [
  {
    image: online,
    title: 'Online Banking',
    text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    image: budgeting,
    title: 'Simple Budgeting',
    text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    image: onboarding,
    title: 'Fast Onboarding',
    text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    image: api,
    title: 'Open API',
    text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];

export default function App() {
  return (
    <div className="font-Sans text-center">
      <Header />
      <NextGen />
      <EasyBank />
      <Articles />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="w-full flex flex-row bg-white justify-between py-3 px-5 fixed z-10">
      <Logo />
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
        className="h-[38rem] m-auto absolute top-[-140px] p-5 w-auto"
      />

      <h1 className="text-[3rem] text-blue font-light leading-normal w-auto mx-auto">
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
    <div className="bg-gray-200 flex flex-col items-center px-5">
      <img src={image} alt={alt} className="w-auto mx-auto rounded-t-[0.5rem]" />
      <div className="bg-white text-start p-10">
        <p className="font-light text-[0.25rem] text-gray-300">By {author}</p>
        <h2 className="text-blue text-base">{title}</h2>
        <p className="font-light text-[0.7rem] text-gray-300">{article}</p>
      </div>
    </div>
  );
}

function Footer() {
  return <footer></footer>;
}
