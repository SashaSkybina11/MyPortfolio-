import { skills } from "@/types/skills";
import css from "./Page.module.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";

const Page = () => {
  return (
    <main className={css.mainContact}>
      <div className={css.contentContact}>
        <h1 className={css.title}>Contact</h1>
        <div className={css.descr}>
          <div className={css.descrItem}>
            <div className={css.descrBox}>
              <MdOutlineAlternateEmail className={css.descrIcon} />
              <p className={css.descrTitle}>Email:</p>
            </div>
            <a href="mailto:sashaskibina16@gmail.com" className={css.descrLink}>
              sashaskibina16@gmail.com
            </a>
          </div>

          <div className={css.descrItem}>
            <div className={css.descrBox}>
              <TbBrandLinkedin className={css.descrIcon} />
              <p className={css.descrTitle}>LinkedIn:</p>
            </div>

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
            <div className={css.descrBox}>
              <VscGithub className={css.descrIcon} />
              <p className={css.descrTitle}>GitHub:</p>
            </div>
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
      </div>
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

      <div className={css.behind}>Contact</div>
    </main>
  );
};

export default Page;
