import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import Features from '../../../components/Features/Features.jsx';
import Header from '../../../components/Header/Header.jsx';
import Motion from '../../../components/Motion/Motion.jsx';
import Ai from '../../../components/Ai/Ai.jsx';
import HowItWorks from '../../../components/HowItWorks/HowItWorks.jsx';
import Cookies from '../../../components/Cookies/Cookies.jsx';

export default function FeaturesPage() {
  return (
    <>
      <header className="header">
        <Nav />
        <Header page={'features'} />
      </header>
      <Motion>
        <main className="main">
          <Features detailed={true} />
          <Ai />
          <HowItWorks />
        </main>
        <Cookies />
        <Footer />
      </Motion>
    </>
  );
}
