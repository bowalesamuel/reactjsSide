import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Modal,
  notification,
  // Input as AntInput
} from "antd";
import { AuthHeader } from "../../components/header";
import Input from "../../components/input";
import Button from "../../components/button";
import styles from "../styles.module.scss";

const SignIn = (props) => {
  const history = useHistory();

  const [email, handleEmail] = useState("");
  const [password, handlePassword] = useState("");

  const onSubmit = () => {
    if (password.match(/^[0-9A-Za-z!@#$%^&*]{6,}$/)) {
      notification.success({
        message: "it is okay",
      });
    } else {
      notification.error({
        message: "Not Good enough",
      });
    }
  };

  return (
    <div className={styles.allFont}>
      <AuthHeader>
        <form
          className={styles.auth__content}
          onSubmit={(e) => {
            history.push("/app");
          }}
        >
          <h3 className={styles.auth__content__subTitle}>
            Sign in to continue to your account
          </h3>

          <Input
            className={styles.auth__content__input__body}
            inputClass={styles.auth__content__input}
            placeholder="Email address"
            onChange={(e) => handleEmail(e.target.value)}
            value={email}
            pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,9}$"
            type="email"
            required={true}
            label="Email Address"
            style={{ borderRadius: 10 }}
          />
          <Input
            className={styles.auth__content__input__body}
            inputClass={styles.auth__content__input}
            anotherClass={"blue"}
            placeholder="Enter strong password"
            onChange={(e) => handlePassword(e.target.value)}
            value={password}
            pattern="(?=.*\w).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            type="password"
            required={true}
            label="Password"
            style={{ borderRadius: 10, backgroundColor: "red" }}
          />

          <Button
            className={styles.auth__content__button}
            form="full"
            disabled={
              !/(?=.*\w).{8,}/.test(password) ||
              !/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,9}$/.test(email)
            }
            type="submit"
            text="Sign in"
          />
        </form>
        <div className={styles.footer}>
          <div>All Rights Reserved &copy; 2020 STAR WARS </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginRight: 60 }}>Privacy | Terms</div>
            <div>English</div>
          </div>
        </div>
      </AuthHeader>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
