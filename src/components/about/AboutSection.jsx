export default function AboutSection({title,text,text2nd}) {
  return (
    <div className="about__section mb-5 md:mb-10">
      <h3 className="about__subtitle text-h3">{title}</h3>
      <p className="about__text text-body  md:leading-10">{text}</p>
      <p className="about__text text-body mt-2 italic font-bold">"{text2nd}"</p>
    </div>
  );
}
