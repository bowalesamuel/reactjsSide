import React from "react";
import styles from "./styles.module.scss";

const Button = ({
  type,
  onClick,
  disabled,
  loading,
  form,
  text,
  className,
  children,
}) => {
  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      className={`${styles.button} ${styles[form]} ${className}`}
    >
      {text ? text : children}
    </button>
  );
};

export default Button;
/** <Button form="full" /> <Button form="outline" /> */
