import React from "react";
import styles from "./Intro.module.css";
import logo from '../../assets/image/kLogok.png';
const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <svg viewBox="0 0 740 160">
          <text
            x="23%"
            y="23%"
            dy="4rem"
            textAnchor="middle"
            className={styles.textbody}
          >
            Kris-D
          </text>
          <text
            x="23%"
            y="23%"
            dy="4rem"
            dx="3.2em"
            textAnchor="middle"
            className={styles.dot}
          >
            portfolio
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Intro;
