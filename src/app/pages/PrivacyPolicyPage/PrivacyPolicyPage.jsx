import { Link } from 'react-router-dom';
import Motion from '../../../components/Motion/Motion';
export default function PrivacyPolicyPage() {
  return (
    <Motion>
      <div className="privacy-policy" id="privacy-policy">
        <div className="privacy-policy-container wrapper">
          <Link
            to="/"
            className="privacy-policy-link hover:text-main-blue mb-8 inline-flex items-center gap-2 transition-colors duration-300"
          >
            <p className="text-body">
              {' '}
              <i className="bx bx-chevrons-left"></i>Powrót do strony głównej
            </p>
          </Link>

          <h1 className="privacy-policy-title mb-8 text-4xl font-black">
            Polityka Prywatności
          </h1>
          <p className="privacy-policy-text text-body-lg privacy-policy-description mb-4">
            Szanujemy Twoją prywatność i nie robimy nic „za plecami”. Dlatego
            poniżej w prostych słowach wyjaśniamy, jak działa ta strona.
          </p>
          <ol className="privacy-policy-list text-body ml-5">
            <li>
              <h2 className="privacy-policy-subtitle text-h2">Dane osobowe</h2>
              <p>
                Korzystając z tej strony nie musisz podawać żadnych danych
                osobowych. Nie zbieramy imion, adresów e-mail ani żadnych innych
                informacji, które pozwalałyby Cię zidentyfikować.
              </p>
              <p>
                {' '}
                Jeśli w przyszłości pojawi się formularz kontaktowy, dane podane
                dobrowolnie będą wykorzystywane wyłącznie do odpowiedzi na
                wiadomość - i do niczego więcej.
              </p>
            </li>

            <li className="mt-5">
              <h2 className="text-h2">Pliki cookie</h2>
              <p>
                Strona korzysta wyłącznie z niezbędnych plików cookie, które są
                potrzebne do jej prawidłowego działania. Nie używamy cookies
                reklamowych, marketingowych ani śledzących.
              </p>
              Te techniczne ciasteczka:{' '}
              <ul className="ml-10 list-disc">
                <li>pomagają stronie działać poprawnie,</li>
                <li>nie zbierają danych osobowych,</li>
                <li>nie śledzą Twojej aktywności w internecie</li>
              </ul>
              <p>
                Krótko mówiąc - są tu tylko po to, żeby wszystko działało tak,
                jak powinno.
              </p>
            </li>
            <li className="mt-5">
              <h2 className="text-h2">Narzędzia zewnętrzne</h2>
              <p>
                Strona nie korzysta z narzędzi analitycznych, takich jak Google
                Analytics, ani z systemów reklamowych. Nikt nie analizuje
                Twojego zachowania, nikt niczego nie profiluje.
              </p>
            </li>
            <li className="mt-5">
              <h2 className="text-h2">Masz prawo do:</h2>
              <ul className="ml-10 list-disc">
                <li>korzystania ze strony bez udostępniania danych,</li>
                <li>
                  usunięcia plików cookie w swojej przeglądarce w dowolnym
                  momencie,
                </li>
                <li>
                  pełnej kontroli nad ustawieniami prywatności po swojej
                  stronie.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </Motion>
  );
}
