export default function ContactInfo({ title, text, icon, link }) {
  return (
    <div className="text-body mt-10 mb-10 transition-all duration-300 hover:ml-5">
      <h3 className="text-h3 flex items-center justify-start">
        <i className={icon}></i> {title}
      </h3>

      {link ? <a href={link}>{text}</a> : <p className="m-2">{text}</p>}
    </div>
  );
}
