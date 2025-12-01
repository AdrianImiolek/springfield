import React, { useState, useEffect } from 'react';
import './nav.scss';
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //trakuj czy menu jest otwarte czy nie domyślnie: zamknięte

  //funkcja żeby otworzyć menu
  const toggleMenu = () => {
    //ustaw setIsMenuOpen na przeciwieństwo do isMenuOpen czyli na true
    setIsMenuOpen(!isMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    //to się odpala tylko raz kiedy komponent jest zamontowany
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    //Posprzątanie: usuń listenera kiedy komponent znika
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); //pusta tablia = odpal raz jak zamontuje się ← Runs ONCE on mount, never again

  useEffect(() => {
    if (isMenuOpen) {
      //← Reads the CURRENT value each time it runs
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]); // ← Runs every time isMenuOpen changes
  //to jest Dependency array
  // useEffect(() => {
  // this code...
  //}, [isMenuOpen]);  ← runs whenever isMenuOpen changes

  return (
    <>
      <header
        className={`header sticky top-0 z-100 w-full transition-colors duration-300 ${isScrolled ? 'bg-black/60' : ''}`}
      >
        <nav
          aria-label="Mobile navigation"
          className="nav-mobile wrapper flex items-center justify-between p-3 md:hidden"
        >
          <div className="nav-mobile__logo-wrapper">
            <a href="#top">
              <img
                className="nav-mobile__logo"
                src={`${isScrolled ? '/Springfield-white.svg' : '/Springfield-colored.svg'}`}
                alt="Springfield"
              ></img>
            </a>
          </div>
          <div className="nav-mobile__menu-wrapper fixed top-3 right-3 z-50 rounded-md border-2 border-black">
            <button
              id="mobile-menu"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className={`nav-mobile__menu-toggle flex cursor-pointer items-center justify-between rounded-md bg-white`}
              onClick={toggleMenu}
            >
              <i className="bx bx-menu-alt-right text-4xl"></i>
            </button>
          </div>
          <div
            className={`nav-mobile__links-shadow fixed top-0 z-30 h-full w-full bg-black opacity-55 transition-[right] duration-200 ${isMenuOpen ? 'right-20' : '-right-full'}`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`nav-mobile__links-wrapper bg-main fixed top-0 bottom-0 z-40 flex w-full flex-col items-start justify-center text-2xl transition-[right] duration-300 ${isMenuOpen ? '-right-20' : '-right-full'}`}
          >
            <ul className="nav-mobile__links flex flex-col items-start justify-center gap-5">
              <li>
                <a
                  href="#functions"
                  className="nav-mobile__link text-nav-mobile m-2 p-2"
                  onClick={toggleMenu}
                >
                  Funkcje
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="nav-mobile__link text-nav-mobile m-2 p-2"
                  onClick={toggleMenu}
                >
                  O nas
                </a>
              </li>
              <li>
                <a
                  href="#prices"
                  className="nav-mobile__link text-nav-mobile m-2 p-2"
                  onClick={toggleMenu}
                >
                  Cennik
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="nav-mobile__link text-nav-mobile m-2 p-2"
                  onClick={toggleMenu}
                >
                  Kontakt
                </a>
              </li>
            </ul>

            <div className="nav-mobile__socials fixed bottom-0 flex w-0.5 justify-between p-5">
              <a
                href="https://discord.com/your-server"
                aria-label="Dołącz do naszego Discorda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-discord-alt pr-5"></i>
              </a>

              <a
                href="https://whatsapp.com"
                aria-label="Dołącz do naszego Whatsappa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-whatsapp pr-5"></i>
              </a>

              <a
                href="https://instagram.com"
                aria-label="Zaobserwuj nas na Instagramie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram-alt pr-5"></i>
              </a>

              <a
                href="https://facebook.com"
                aria-label="Zaobserwuj nas na Facebooku"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>
            </div>
          </div>
        </nav>

        <nav
          aria-label="Desktop navigation"
          className="nav-desktop transition-colors duration-300"
        >
          <div
            className={`wrapper hidden items-center justify-between transition-all duration-300 md:flex ${isScrolled ? 'pt-0 pr-3 pb-0 pl-3 text-white' : 'p-3'}`}
          >
            <div className="nav-desktop__logo-wrapper">
              <a href="#top">
                <img
                  className="nav-desktop__logo"
                  src={
                    isScrolled
                      ? '/Springfield-white.svg'
                      : '/Springfield-colored.svg'
                  }
                  alt="Springfield"
                ></img>
              </a>
            </div>
            <div className="nav-desktop__links-wrapper">
              <ul className="flex items-center justify-between">
                <li>
                  <a
                    href="#features"
                    className={`nav-desktop__link text-nav-desktop p-5 transition-all duration-50 ${isScrolled ? 'hover:text-main pb-1' : ' border-main border-b-0 pb-2 hover:border-b-2 '}`}
                  >
                    Funkcje
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={`nav-desktop__link text-nav-desktop p-5 transition-all duration-50 ${isScrolled ? 'hover:text-main pb-1' : ' border-main border-b-0 pb-2 hover:border-b-2 '}`}
                  >
                    O nas
                  </a>
                </li>
                <li>
                  <a
                    href="#prices"
                    className={`nav-desktop__link text-nav-desktop p-5 transition-all duration-50 ${isScrolled ? 'hover:text-main pb-1' : ' border-main border-b-0 pb-2 hover:border-b-2 '}`}
                  >
                    Cennik
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`nav-desktop__link text-nav-desktop p-5 transition-all duration-50 ${isScrolled ? 'hover:text-main pb-1' : ' border-main border-b-0 pb-2 hover:border-b-2 '}`}
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0 })}
        className={`bg-main fixed right-3 bottom-20 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 lg:right-10 lg:bottom-20 lg:h-13 lg:w-13 ${isScrolled ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-0 opacity-0'}`}
      >
        <i className="bx bx-up-arrow-alt text-xl lg:text-2xl"></i>
      </button>
    </>
  );
}
