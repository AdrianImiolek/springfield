import './css.scss';
export default function Hero() {
  return (
    <div className="hero wrapper grid grid-rows-[min-content] p-3 pt-20 md:pt-30 lg:pt-50" data-usal="zoomin once">
      <div className="hero__container">
        <h1 className="hero__title text-h1">Era współpracy bez granic.</h1>
        <p className="hero__text text-body-lg mt-10">
          Springfield łączy Twoje narzędzia, zespoły i cele w jednej platformie.
        </p>
        <p className="hero__text text-body-lg">
          Nareszcie wszystko działa razem.
        </p>
      </div>

      <div className="hero__logos relative hidden justify-center lg:flex">
        <img className="hero__logo" src="/springfield-logo.svg" alt="" />
        <img
          className="hero__logo w-logos absolute -left-0"
          src="/asana-logo.svg"
          alt=""
        />
        <img
          className="hero__logo w-logos absolute right-0"
          src="/clockify-logo.svg" 
          alt=""
        />

         <img
          className="hero__logo w-logos absolute bottom-45 right-0"
          src="/jira-logo.svg" 
          alt=""
        />
        <img
          className="hero__logo w-logos absolute bottom-0 right-0"
          src="/monday-logo.svg" 
          alt=""
        />
         <img
          className="hero__logo w-logos absolute self-end"
          src="/notion-logo.svg" 
          alt=""
        />
         <img
          className="hero__logo w-logos absolute bottom-0 left-0"
          src="/podio-logo.svg" 
          alt=""
        />
         <img
          className="hero__logo w-logos absolute bottom-45 left-0 "
          src="/slack-logo.svg" 
          alt=""
        />

      </div>

      <div className="hero__btn-container col-span-2 flex justify-center self-end">
        <button
          className="hero__btn bg-main h-10 w-10 animate-bounce cursor-pointer rounded-full lg:right-10 lg:bottom-10 lg:h-13 lg:w-13"
          onClick={() => document.getElementById('features')?.scrollIntoView()}
        >
          <i className="bx bx-down-arrow-alt text-xl lg:text-2xl"></i>
        </button>
      </div>
    </div>
  );
}
