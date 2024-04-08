import './App.css';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Hamburger } from './images/icon-hamburger.svg';
import { ReactComponent as Online } from './images/icon-online.svg';
import { ReactComponent as Budget } from './images/icon-budgeting.svg';
import { ReactComponent as Onboarding } from './images/icon-onboarding.svg';
import { ReactComponent as API } from './images/icon-api.svg';
import { ReactComponent as Facebook } from './images/icon-facebook.svg';
import { ReactComponent as Youtube } from './images/icon-youtube.svg';
import { ReactComponent as Twitter } from './images/icon-twitter.svg';
import { ReactComponent as PInterest } from './images/icon-pinterest.svg';
import { ReactComponent as Instagram } from './images/icon-instagram.svg';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <Logo />
      <Hamburger />
    </header>
  );
}

function Main() {
  return (
    <main>
      <img src={require('./images/image-mockups.png')} alt="mockupImage" />
      <h1>Next generation digital banking</h1>
      <p>
        Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
        saving, budgeting, investing, and much more.
      </p>
      <div>Request Invite</div>
      <div>
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial hub. Control your
          finances like never before.
        </p>
        <div>
          <div>
            <Online />
            <h2>Online Banking</h2>
            <p>
              Our modern web and mobile applications allow you to keep track of your finances
              wherever you are in the world.
            </p>
          </div>
          <div>
            <Budget />
            <h2>Simple Budgeting</h2>
            <p>
              See exactly where your money goes each month. Receive notifications when you’re close
              to hitting your limits.
            </p>
          </div>
          <div>
            <Onboarding />
            <h2>Fast Onboarding</h2>
            <p>
              We don’t do branches. Open your account in minutes online and start taking control of
              your finances right away.
            </p>
          </div>
          <div>
            <API />
            <h2>Open API</h2>
            <p>
              Manage your savings, investments, pension, and much more from one account. Tracking
              your money has never been easier.
            </p>
          </div>
        </div>
        <div>
          <h2>Latest Articles</h2>
          <div>
            <div>
              <img src={require('./images/image-currency.jpg')} alt="currency" />
            </div>
            <div>
              <p>By Claire Robinson</p>
              <h3>Receive money in any currency with no fees</h3>
              <p>
                The world is getting smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={require('./images/image-restaurant.jpg')} alt="restaurant" />
            </div>
            <div>
              <p>By Claire Robinson</p>
              <h3>Receive money in any currency with no fees</h3>
              <p>
                The world is getting smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={require('./images/image-plane.jpg')} alt="plane" />
            </div>
            <div>
              <p>By Wilson Hutton</p>
              <h3>Treat yourself without worrying about money</h3>
              <p>
                Our simple budgeting feature allows you to separate out your spending and set
                realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={require('./images/image-currency.jpg')} alt="currency" />
            </div>
            <div>
              <p>By Wilson Hutton</p>
              <h3>Take your Easybank card wherever you go</h3>
              <p>
                We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={require('./images/image-confetti.jpg')} alt="confetti" />
            </div>
            <div>
              <p>By Claire Robinson</p>
              <h3> Our invite-only Beta accounts are now live!</h3>
              <p>
                After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                It’s easy to request an invite through the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <Logo style={{}} />
      <div>
        <Facebook />
        <Youtube />
        <Twitter />
        <PInterest />
        <Instagram />
      </div>
      <div></div>
      <div>Request Invite</div>
      <p>&copy; Easybank. All Rights Reserved</p>
    </footer>
  );
}
