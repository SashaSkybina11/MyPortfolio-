"use client";

import { skills } from "@/types/skills";
import css from "./Page.module.css";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useState, type MouseEvent } from "react";
import { useKeenSlider } from "keen-slider/react";
import { projects } from "@/data/projects";

type ArrowProps = {
  direction: "prev" | "next";
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
};

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === projects.length - 1;

  return (
    <main className={`page-shell page-container ${css.containerProjects}`}>
      <div className={css.whiteLine}>
        <div className={css.track}>
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className={css.item}>
              <span className={css.whiteText}>{skill}</span>
              <span className={css.dot}></span>
            </div>
          ))}
        </div>
      </div>
      <div className={css.grayLine}>
        <div className={css.track}>
          {[...skills, ...skills].reverse().map((skill, i) => (
            <div key={i} className={css.item}>
              <span className={css.grayText}>{skill}</span>
              <span className={css.dot}></span>
            </div>
          ))}
        </div>
      </div>

      <div className={css.contentProjects}>
        <h1 className={css.title}>projects</h1>
        <div className={css.navigationWrapper}>
          <div ref={sliderRef} className={`keen-slider ${css.slider}`}>
            {projects.map((project) => (
              <div
                key={project.name}
                className={`keen-slider__slide ${css.slide}`}
              >
                <article className={css.card}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.cardLink}
                  >
                    <Image
                      className={css.cardImg}
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      width={400}
                      height={200}
                    />
                    <p className={css.cardName}>{project.name}</p>
                  </a>
                </article>
              </div>
            ))}
          </div>

          {loaded && (
            <>
              <Arrow
                direction="prev"
                onClick={(event) => {
                  event.stopPropagation();
                  instanceRef.current?.prev();
                }}
                disabled={isFirstSlide}
              />
              <Arrow
                direction="next"
                onClick={(event) => {
                  event.stopPropagation();
                  instanceRef.current?.next();
                }}
                disabled={isLastSlide}
              />
            </>
          )}
        </div>

        {loaded && (
          <div className={css.points}>
            {projects.map((project, idx) => (
              <button
                key={project.name}
                type="button"
                aria-label={`Show ${project.name}`}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`${css.point} ${
                  currentSlide === idx ? css.pointActive : ""
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className={css.behind}>projects</div>
    </main>
  );
};

export default Page;

function Arrow({ direction, onClick, disabled }: ArrowProps) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${css.arrowButton} ${
        isPrev ? css.arrowLeft : css.arrowRight
      }`}
      disabled={disabled}
      aria-label={isPrev ? "Show previous project" : "Show next project"}
    >
      <svg
        className={`${css.arrowIcon} ${disabled ? css.arrowDisabled : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {isPrev ? (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        ) : (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </button>
  );
}
