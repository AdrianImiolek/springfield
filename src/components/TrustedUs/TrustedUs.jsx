import './trustedus.css';
import TrustedUsLogos from './TrustedUsLogos';

export default function TrustedUs() {
  const logos = [
    { id: 1, name: 'Aura logo', logo: '/logos/Aura-colored.svg' },
    {
      id: 2,
      name: 'Hamilton logo',
      logo: '/logos/Hamilton-colored.svg',
    },
    { id: 3, name: 'Manila logo', logo: '/logos/Manila-colored.svg' },
    { id: 4, name: 'Nairobi logo', logo: '/logos/Nairobi-colored.svg' },
    { id: 5, name: 'Osaka logo', logo: '/logos/Osaka-colored.svg' },
    { id: 6, name: 'SAVANNAH logo', logo: '/logos/SAVANNAH-colored.svg' },
  ];

  return (
    <div className="carousel-trusted-us relative pt-20 pb-20">
      <h2 className="h2 text-h2 text-center"><span className="gradient-green-to-pink">Zaufali</span>   nam:</h2>
      <div className="carousel-trusted-us-inner">
        {logos.map((logo) => (
          <TrustedUsLogos
            key={logo.id}
            name={logo.name}
            logo={logo.logo}
          />
        ))}

        {logos.map((logo) => (
          <TrustedUsLogos
            key={logo.id}
            name={logo.name}
            logo={logo.logo}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
