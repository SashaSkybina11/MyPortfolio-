import { skills } from "@/types/skills";
import css from "./Page.module.css";

const Page = () => {
  return (
    <main className={css.containerContact}>
      <div className={css.contentContact}>
        <h1 className={css.title}>Contact</h1>
        <div className={css.descr}>
          <div className={css.descrItem}>
            <p className={css.descrTitle}>Email:</p>
            <a href="mailto:sashaskibina16@gmail.com" className={css.descrLink}>
              sashaskibina16@gmail.com
            </a>
          </div>

          <div className={css.descrItem}>
            <p className={css.descrTitle}>LinkedIn:</p>
            <a
              href="https://www.linkedin.com/in/oleksandraskybina/"
              className={css.descrLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/oleksandraskybina
            </a>
          </div>

          <div className={css.descrItem}>
            <p className={css.descrTitle}>GitHub:</p>
            <a
              href="https://github.com/SashaSkybina11"
              className={css.descrLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/SashaSkybina11
            </a>
          </div>
        </div>
        {/* <div className={css.whiteLine}>
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
        <div className={css.behind}>Contact</div> */}
      </div>
    </main>
  );
};

export default Page;
