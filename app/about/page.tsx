import Image from "next/image";
import css from "./Page.module.css";
import { skills } from "@/types/skills";

const Page = () => {
  return (
    <main className={`page-shell page-container ${css.containerAbout}`}>
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
      <div className={css.image}>
        <Image
          src="/avatar/my-photo.jpg"
          alt="My photo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={css.contentAbout}>
        <h1 className={css.title}>about me</h1>
        <div className={css.descr}>
          <p>
            Hello<span>!</span> My name is <span> Oleksandra</span>, I&#8217;m
            24 years old. I&#8217;m a professional futsal player currently
            playing in Spain and representing the Ukrainian national teams in
            both futsal and beach soccer.
          </p>
          <p>
            Alongside my sports career, I&#8217;m also a Front-End Developer
            passionate about building modern and user-friendly web applications.
            I work with technologies such as
            <span> JavaScript, React, Next.js, HTML, CSS, and REST APIs.</span>
          </p>
          <p>
            My experience as a professional athlete has helped me develop
            discipline, teamwork, and determination — qualities that I bring
            into my work as a developer. I&#8217;m always learning, improving my
            skills, and exploring new technologies to create better digital
            experiences.
          </p>
        </div>
      </div>
      <div className={css.behind}>about</div>
    </main>
  );
};

export default Page;
