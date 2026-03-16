import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import Mission from '../../../components/Mission/Mission';
import CompanyTimeline from '../../../components/CompanyTimeline/CompanyTimeline';
import TrustedUs from '../../../components/TrustedUs/TrustedUs';
import WhySpringfield from '../../../components/WhySpringfield/WhySpringfield';
import Motion from '../../../components/Motion/Motion';
import Header from '../../../components/Header/Header';
import Cookies from '../../../components/Cookies/Cookies';

export default function AboutPage() {
  return (
    <>
      <header className="header">
        <Nav />
        <Header page={"about-us"} />
      </header>
      <Motion>
        <main className="main">
          <Mission />
          <CompanyTimeline />
          <TrustedUs />
          <WhySpringfield />
        </main>
        <Cookies />
        <Footer />
      </Motion>
    </>
  );
}
