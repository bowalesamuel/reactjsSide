import React from "react";
import { connect } from "react-redux";
import styles from "./style.module.scss";
import LandingHeader from "./landingHeader";
import AuthBG from "../../assets/svg/authbg.svg";

function AnotherHeader({ children }) {
  return (
    <div>
      <LandingHeader />

      <div className={styles.auth}>{children}</div>
    </div>
  );
}

export default connect()(AnotherHeader);
