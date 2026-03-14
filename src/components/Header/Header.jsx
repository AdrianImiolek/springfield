import { ArrowRightStroke } from '@boxicons/react';
import { Link } from 'react-router-dom';
import Motion from '../Motion/Motion';
import { headerData } from './header.data';
import { useState } from 'react';

export default function Header({ page }) {
  const [isHovered, setIsHovered] = useState(false);
  const header = headerData.find((h) => h.page === page);

  return (
    <Motion>
      <section className="hero wrapper pt-20 pb-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-h1 m-2">
            {header.heading.textBefore ? (
              <>
                {header.heading.textBefore}
                <span className={header.heading.gradient}>
                  {' '}
                  {header.heading.highlight}{' '}
                </span>
                {header.heading.textAfter}
              </>
            ) : (
              <>
                {header.heading.text}
                <span className={header.heading.gradient}>
                  {' '}
                  {header.heading.highlight}
                </span>
              </>
            )}
          </h1>
          <p className="text-body-lg mt-5 mb-5 max-w-2xl text-gray-500">
            {header.text}
          </p>

          {header.button.link.charAt(0) === '/' ? (
            <Link
              to={header.button.link}
              style={{
                backgroundColor: isHovered ? header.hoverColor : header.color,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`${header.color} cta-btn text-body-sm hover:${header.hoverColor} m-1 flex cursor-pointer items-center rounded-3xl p-3 transition-colors duration-300`}
            >
              {header.button.text}
              <ArrowRightStroke />
            </Link>
          ) : (
            <a
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(header.button.link)
                  .scrollIntoView({ behavior: 'smooth' });
              }}
              href={header.button.link}
              style={{
                backgroundColor: isHovered ? header.hoverColor : header.color,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`${header.color} cta-btn text-body-sm hover:${header.hoverColor} m-1 flex cursor-pointer items-center rounded-3xl p-3 transition-colors duration-300`}
            >
              {header.button.text}
              <ArrowRightStroke />
            </a>
          )}
        </div>
      </section>
    </Motion>
  );
}
