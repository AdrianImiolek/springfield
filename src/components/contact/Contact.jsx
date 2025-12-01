export default function Contact() {
  return (
    <section
      className="contact wrapper justify flex flex-col overflow-hidden p-3 pb-10"
      
      data-usal="split-item split-fade-r split-delay-500 once"
    >
      <h2 className="contact__title text-h2 mt-5 mb-5" id="contact">
        Skontaktuj się z nami
      </h2>
      <div className="contact__grid grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* MAPA */}
        <div className="contact__map-container">
          <iframe
            className="contact__map h-[50vh] w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11966.10424245289!2d15.740101615168617!3d50.913293517583426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470edfd341066a57%3A0xbf4830aaca38047d!2sGaleria%20Sudecka!5e0!3m2!1spl!2spl!4v1762938674341!5m2!1spl!2spl"
          ></iframe>
        </div>

        {/* INFORMACJE */}
        <div className="contact__info text-body-sm flex flex-col justify-center">
          <h3 className="contact__header text-h3">Kontakt</h3>

          <p className="contact__text">
            <i className="bx bx-phone-call"></i> Kontakt telefoniczny:
            <a
              href="tel:+48 999 000 111"
              className="hover:text-main duration-300"
            >
              {' '}
              +48 999 000 111
            </a>
          </p>

          <p className="contact__text">
            <i className="bx bx-mail-send"></i> E-mail:
            <a
              href="mailto:wymyślonyemail@domena.pl"
              className="hover:text-main duration-300"
            >
              {' '}
              wymyślonyemail@domena.pl
            </a>
          </p>

          <p className="contact__text">
            <i className="bx bx-phone-call"></i> Adres: 58-506 Jelenia Góra,
            Wymyślona Nazwa 12/27
          </p>

          <p className="contact__text">
            <i className="bx bx-help-circle"></i> Biuro obsługi klienta działa w
            godzinach: 9:00 - 17:00
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="contact__socials flex-wrap md:col-span-2">
          <h3 className="contact__socials-header text-h3 mt-5">
            Wpadnij do nas na:
          </h3>

          <div className="contact__socials-container mt-5 flex flex-col justify-around md:flex-row">
            <a
              href="https://discord.com/your-server"
              aria-label="Dołącz do naszego Discorda"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link text-body hover:text-main p-2 duration-300"
            >
              <i className="bx bxl-discord-alt"></i> Discord
            </a>

            <a
              href="https://whatsapp.com"
              aria-label="Dołącz do naszego Whatsappa"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link text-body hover:text-main p-2 duration-300"
            >
              <i className="bx bxl-whatsapp"></i> Whatsapp
            </a>

            <a
              href="https://instagram.com"
              aria-label="Zaobserwuj nas na Instagramie"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link text-body hover:text-main p-2 duration-300"
            >
              <i className="bx bxl-instagram-alt"></i> Instagram
            </a>

            <a
              href="https://facebook.com"
              aria-label="Zaobserwuj nas na Facebooku"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link text-body hover:text-main p-2 duration-300"
            >
              <i className="bx bxl-facebook-circle"></i> Facebook
            </a>
          </div>

          <div className="contact__description">
            <p className="contact__description-text text-body mt-10">
              Jeśli masz pytania dotyczące wdrożenia Springfield, integracji czy
              planów cenowych - odezwij się do nas. Nasz zespół odpowie szybko i
              konkretnie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
