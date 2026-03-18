import { useState, useEffect } from "react";

export default function Cookies() {
  const [isConsented, setIsConsented] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      setIsConsented(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsConsented(true);
  };

  return (
    <>
      {/* Cookie Banner - slides down when accepted */}
      <div
        className={` ${isConsented ? "-bottom-60" : "bottom-0"} cookies-banner bg-main-pink/90 wrapper fixed left-1/2 z-50 flex w-full -translate-x-1/2 flex-wrap items-center justify-evenly gap-10 rounded-t-3xl p-6 text-sm duration-300`}
      >
        <p className="cookies-banner-text">
          Nasza strona korzysta tylko z niezbędnych plików cookie, tych potrzebnych do prawidłowego działania.
        </p>
        <button
          className="cookies-banner-button bg-main-blue hover:bg-main-blue-light cursor-pointer rounded-3xl px-6 py-3 whitespace-nowrap transition-colors"
          onClick={acceptCookies}
        >
          Zapoznałem się
        </button>
      </div>

      {/* Cookie icon - appears after accepting */}
      <div
        className={` ${isConsented ? "scale-100" : "scale-0"} cookie-icon bg-main-green fixed bottom-5 left-5 z-50 cursor-pointer rounded-full  duration-300 hover:bg-main-green-light`}
        onClick={() => setIsConsented(false)}
      >
        <i className="bx bx-cookie p-3 text-4xl"></i>
      </div>
    </>
  );
}
