import { skills } from "@/types/skills";
import css from "./RunningLineGray.module.css";

type Props = {
  className?: string;
};

const RunningLineGray = ({ className }: Props) => {
  return (
    <div className={className}>
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
    </div>
  );
};

export default RunningLineGray;
