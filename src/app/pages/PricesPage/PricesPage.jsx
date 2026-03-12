import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import Prices from '../../../components/Prices/Prices';
import Faq from '../../../components/Faq/Faq';
import Motion from '../../../components/Motion/Motion';

export default function PricesPage() {
  return (
    <>
      <header className="header">
        <Nav />
        <Header page={'prices'} />
      </header>
      <Motion>
        <main className="main">
          <Prices />
          <Faq page={'prices'} />
        </main>
        <Footer />
      </Motion>
    </>
  );
}
