import { ArrowDown } from '@boxicons/react';
export default function CompanyTimelineDate({ title, year, text, isLast }) {
  return (
    <>
      <div className="timeline-date m-5 text-center">
        <p className="text-body">{year}</p>
        <p className="text-body">{title} </p>
        <p className="text-body-sm">{text}</p>
      </div>
      <div className="timeline-arrow flex justify-center">{!isLast && <ArrowDown />}</div>
    </>
  );
}
