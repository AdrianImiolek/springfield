import Nav from '../../../components/Nav/Nav';
import Ai from '../../../components/Ai/Ai';
import Faq from '../../../components/Faq/Faq';
import Features from '../../../components/Features/Features';
import Opinions from '../../../components/Opinions/Opinions';
import Prices from '../../../components/Prices/Prices';
import TrustedUs from '../../../components/TrustedUs/TrustedUs';
import Motion from '../../../components/Motion/Motion';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <header className="header">
        <Nav />
        <Header page={"home"}/>
      </header>
      <Motion>
        <main className="main">
          <TrustedUs />
          <Features />
          <Ai />
          <Prices />
          <Opinions />
          <Faq />
        </main>
       <Footer />
      </Motion>
    </>
  );
}
