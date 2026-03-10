import { Link } from 'react-router-dom';

export default function Footer() {
  const date = new Date();
  const getYear = date.getFullYear();

   const links = [
    { title: 'O nas', link_to: '/o-nas' },
    { title: 'Funkcje', link_to: '/funkcje' },
    { title: 'Cennik', link_to: '/cennik' },
    { title: 'Kontakt', link_to: '/kontakt' },
    { title: 'Polityka prywatności', link_to: '/kontakt' },
  ];

  return (
    <footer className="footer bg-footer text-white">
      <div className="wrapper text-body-sm">
        <div>
          <ul className="flex"
        >
          {links.map(({ title, link_to }, index) => (
            <li className="m-2 p-2 " key={index}>
              <Link className="link duration-300 hover:text-main-pink" to={link_to}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        </div>
        <p className="text-body-sm text-center">
          &copy; Springfield {getYear} Wszelkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  );
}
