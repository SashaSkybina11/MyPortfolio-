import { skills } from "@/types/skills";
import css from "./Page.module.css";

const Page = () => {
  return (
    <main className={`page-shell page-container ${css.main}`}>
      <div className={css.content}>
        <h1 className={css.title}>
          Hello World<span>!</span>
        </h1>
        <p className={css.descr}>
          Welcome To My <span>Portfolio</span>! I&#8217;m Sasha, a
          <span> Frontent</span> Developer.
        </p>
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
      <div className={css.behind}>dev</div>
    </main>
  );
};

export default Page;
