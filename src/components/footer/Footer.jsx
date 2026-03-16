import { Link } from 'react-router-dom';

export default function Footer() {
  const date = new Date();
  const getYear = date.getFullYear();

   const links = [
    { title: 'O nas', link_to: '/o-nas' },
    { title: 'Funkcje', link_to: '/funkcje' },
    { title: 'Cennik', link_to: '/cennik' },
    { title: 'Kontakt', link_to: '/kontakt' },
    { title: 'Polityka prywatności', link_to: '/polityka-prywatnosci' },
  ];

  return (
    <footer className="footer bg-footer text-white">
      <div className="wrapper text-body-sm">
        <div>
          <ul className="flex flex-col md:flex-row justify-end"
        >
          {links.map(({ title, link_to }, index) => (
            <li className="m-1 p-1 " key={index}>
              <Link className="link duration-300 hover:text-main-pink" to={link_to}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        </div>
        <div>
          
        </div>
        <p className="text-body-sm text-center">
          &copy; Springfield {getYear} Wszelkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  );
}
