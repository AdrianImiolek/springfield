export default function Question({title,description, isActive, openQuestion}) {


  return (
    <div onClick={openQuestion} className="faq-question p-5 relative cursor-pointer">
      <p className="text-body flex items-center cursor-pointer">{title} <i className={`bx bx-arrow-down-stroke ${isActive ? "rotate-180" : ""} transition-transform duration-300`} /></p>
      <p className={`text-body-sm ${isActive ? "block" : "hidden"} transition-all duration-300 p-4`}>{description}</p>
    </div>
  );
}


