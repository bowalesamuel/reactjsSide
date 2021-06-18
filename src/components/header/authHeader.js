import React from "react";
import styles from "./style.module.scss";
import LandingHeader from "./landingHeader";
import AuthLeft from "../../assets/svg/homeLeft.svg";
import AuthRight from "../../assets/svg/homeRight.svg";

const AuthHeader = ({ children }) => {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__left}>
        <div className={styles.auth__left__title}>
          Welcome to Star Wars the clone wars
        </div>
        <div>
          <img className={styles.auth__left__image} src={AuthLeft} alt="" />
        </div>
      </div>
      <div className={styles.auth__right}>
        <div className={styles.auth__right__content}>{children}</div>{" "}
      </div>
      <div className={styles.auth__right2}>
        <div style={{display:'flex', paddingTop:15, paddingRight:15}}>
        <img className={styles.auth__right2__image} src={AuthRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
