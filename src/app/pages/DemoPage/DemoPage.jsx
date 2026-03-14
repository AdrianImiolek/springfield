import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Motion from '../../../components/Motion/Motion';
export default function DemoPage() {
  return (
    <>
      <Motion>
        <div className="flex justify-center items-center">
          <img
            className="absolute -z-10 bottom-0 h-full opacity-20 object-cover"
            src="/ai/spring-AI.png"
          />
          <div className="under-construction flex h-[90vh] w-full items-center justify-center">
            <div className="text-body text-center">
              <p>Ta strona jest w trakcie budowy!</p>
              <Link className="text-main-blue underline hover:text-main-blue-light transition-colors duration-300" to="/">
                Powrót do strony głównej
              </Link>
            </div>
          </div>
        </div>
      </Motion>
      {/* <Nav />
        <main className="main"></main>
        <Footer /> */}
    </>
  );
}
