import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import Motion from '../../../components/Motion/Motion.jsx';
import Header from '../../../components/Header/Header.jsx';

export default function ContactPage() {
  return (
    <>
      <header className="header">
        <Nav />
        <Header page={'contact'} />
      </header>
      <Motion>
        <main className="main"></main>
        <Footer />
      </Motion>
    </>
  );
}
