import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Nav() {
  const links = [
    { title: 'O nas', link_to: '/o-nas' },
    { title: 'Funkcje', link_to: '/funkcje' },
    { title: 'Cennik', link_to: '/cennik' },
    { title: 'Kontakt', link_to: '/kontakt' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav overflow-hidden lg:backdrop-blur-sm fixed w-full top-0 z-90 bg-white/50">
      <div
        className={`overflow fixed top-0 bottom-0 w-full bg-black/80 backdrop-blur-sm ${isOpen ? 'left-[0]' : 'left-full'} lg:hidden`}
        onClick={toggleMenu}
      ></div>
      <div className="wrapper flex items-center justify-between">
        <div className="logo">
          <Link to="/" >
            {' '}
            <img
              className="max-h-10"
              src="/logos/springfield-colored.svg"
              alt="Springfield logo"
            />
          </Link>
        </div>

        <button
          className="shadow-main-pink z-100 cursor-pointer rounded-2xl bg-white p-2 shadow-md lg:hidden"
          onClick={toggleMenu}
        >
          <i
            className="bx bx-menu-notification text-icons"
            aria-label="Przycisk mobilnego menu"
          />
        </button>

        <ul
          className={`links-list text-body bg-main-pink border-main-pink fixed top-0 flex h-full w-full flex-col items-start justify-center border-1 duration-300 ${isOpen ? 'left-[40%] md:left-[60%]' : 'left-full'} rounded-4xl lg:hidden`}
        >
          {links.map(({ title, link_to }, index) => (
            <li className="m-2 p-2" key={index}>
              <Link className="link" to={link_to}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="links-list text-body hidden items-center justify-start lg:flex">
          {links.map(({ title, link_to }, index) => (
            <li className="p-3" key={index}>
              <Link
                className="link border-main-pink duration-100 hover:border-b-2"
                to={link_to}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
