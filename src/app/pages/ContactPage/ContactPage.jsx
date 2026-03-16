import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import Motion from '../../../components/Motion/Motion.jsx';
import Header from '../../../components/Header/Header.jsx';
import Contact from '../../../components/Contact/Contact.jsx';
import Cookies from '../../../components/Cookies/Cookies.jsx';

export default function ContactPage() {
  return (
    <>
      <header className="header">
        <Nav />
        <Header page={'contact'} />
      </header>
      <Motion>
        <main className="main">
          <Contact />
        </main>
        <Cookies />
        <Footer />
      </Motion>
    </>
  );
}
