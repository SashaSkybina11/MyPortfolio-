import { skills } from "@/types/skills";
import css from "./RunningLineWhite.module.css";

type Props = {
  className?: string;
};

const RunningLineWhite = ({ className }: Props) => {
  return (
    <div className={className}>
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
    </div>
  );
};

export default RunningLineWhite;
