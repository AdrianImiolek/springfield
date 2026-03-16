import ContactInfo from './ContactInfo';

export default function Contact() {
  const contact = [
    {
      id: 1,
      icon: 'bx bx-location-pin',
      title: 'Adres',
      text: '53-235 Wrocław, Grabiszyńska 208',
    },
    {
      id: 2,
      icon: 'bx bx-phone',
      title: 'Telefon',
      link: 'tel:888329362',
      text: '888 329 362',
    },
    {
      id: 3,
      icon: 'bx bx-envelope',
      title: 'E-mail',
      link: 'mailto:kontakt@springfield.pl',
      text: 'kontakt@springfield.pl',
    },
  ];

  const socials = [];

  return (
    <section className="contact wrapper pt-20 pb-20" id="contact">
      <h2 className="text-h2 text-center m-5">
        Tutaj nas <span className="gradient-pink-to-green">znajdziesz</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <address>
          {contact.map((contact) => (
            <ContactInfo
              key={contact.id}
              icon={contact.icon}
              title={contact.title}
              text={contact.text}
              link={contact.link}
            />
          ))}
        </address>
        <div>
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.6577665123564!2d16.98356849226063!3d51.096323167747514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc21f2c0944c3%3A0x35e35fc40066d4e6!2sGrabiszy%C5%84ska%20208%2C%2053-235%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1773674062000!5m2!1spl!2spl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
