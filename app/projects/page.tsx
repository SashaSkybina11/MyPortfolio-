import { skills } from "@/types/skills";
import css from "./Page.module.css";
import Image from "next/image";

const Page = () => {
  return (
    <div className={css.containerProjects}>
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
        <h2 className={css.title}>projects</h2>
        <ul className={css.listCard}>
          <li className={css.card}>
            <a href="#" className={css.cardLink}>
              <Image
                className={css.cardImg}
                src="/project1.png"
                alt="Project 1 preview"
                width={400}
                height={300}
              ></Image>
              <p className={css.cardName}></p>
            </a>
          </li>
          <li className={css.card}>
            <a href="#" className={css.cardLink}>
              <Image
                className={css.cardImg}
                src="/project2.png"
                alt="Project 2 preview"
                width={400}
                height={300}
              ></Image>
              <p className={css.cardName}></p>
            </a>
          </li>
          <li className={css.card}>
            <a href="#" className={css.cardLink}>
              <Image
                className={css.cardImg}
                src="/project3.png"
                alt="Project 3 preview"
                width={400}
                height={300}
              ></Image>
              <p className={css.cardName}></p>
            </a>
          </li>
        </ul>
      </div>
      <div className={css.behind}>projects</div>
    </div>
  );
};

export default Page;
