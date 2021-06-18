import React, { useState } from "react";
import { 
  useHistory,
   Link,
    useLocation
   } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { AstroLogoWhite } from "../../assets/svg";
import Button from "../button";
import styles from "./style.module.scss";

const LandingHeader = ({ form, type }) => {
  const [show, setShow] = useState(false);
  let location = useLocation();
  const { pathname } = location;
  const history = useHistory();
  return (
    <div
      className={`${styles.landingHeader} ${form === "white" && styles.rev}`}
    >
      <div className={styles.landingHeaderLeft}>
        <Link to="/">
          <AstroLogoWhite className={styles.landingHeaderLeftLogo} />
        </Link>
      </div>

      <div onClick={() => {
        setShow(true)
        console.log('pressed')
        }} className={styles.Hamburger}>
        <MenuOutlined style={{ color: "white", fontSize: "24px" }} />
      </div>

      <div
        className={`${styles.landingHeaderLeftLinks} ${
          show && styles.mobile__nav
        }`}
      >
        <div onClick={() => setShow(false)} className={styles.closeMemu}>
          <CloseOutlined
            style={{ color: "#fff", fontSize: "30px", marginBottom: "30px" }}
          />
        </div>
        <div className={`${styles.landingHeaderLeftLinks} ${styles.links}`}>
          <div
            className={`${styles.landingHeaderLeftLinksItem}  ${
              form === "white" && styles.rev
            }  ${pathname === "/rates" && styles.active}`}
            onClick={() => history.push("/rates")}
          >
            Rates
          </div>
        </div>
        {type === "signup" || !type ? (
          <Button
            onClick={() => history.push("/signin")}
            form="full"
            text="Login"
            className={`${styles.login} ${form === "white" && styles.rev}`}
          />
        ) : null}

        {type !== "signup" ? (
          <Button
            onClick={() => history.push("/signup")}
            form="full"
            text="Sign up"
            className={styles.signup}
          />
        ) : null}
      </div>
    </div>
  );
};

export default LandingHeader;
