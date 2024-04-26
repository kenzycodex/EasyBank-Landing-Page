import { useState } from 'react';
import { Nav } from './Nav';
import { Header } from './Header';
import { Footer } from './Footer';
import { Body } from './Body';

export default function App() {
  return (
    <div className="font-Sans text-blue text-center relative">
      <EasyBankApp />
    </div>
  );
}

function EasyBankApp() {
  const [isOpen, setIsOpen] = useState(false);

  // set handler to open/close modal window
  const handlerOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <Nav isOpen={isOpen} handlerOpen={handlerOpen} />
      <Header />
      <Body />
      <Footer />
    </>
  );
}
