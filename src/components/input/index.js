import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Input as AntInput } from "antd";

const Input = ({
  label,
  placeholder,
  value,
  name,
  onChange,
  success,
  error,
  hint,
  Dummy,
  className,
  labelClass,
  inputClass,
  hintClass,
  errorMessage,
  type = "text",
  minlength,
  maxlength,
  style = {},
  disabled,
  defaultValue,
  pattern,
  inputMode,
  min,
  max,
  onInput,
  anotherClass,
  ...prop
}) => {
  const textInput = useRef(null);
  const [validate, setValidValue] = useState(false);

  const handleValidity = () => {
    if (value && value.length > 1)
      setValidValue(
        textInput && textInput.current && !textInput.current.checkValidity()
      );
  };

  return (
    <div className={`${styles.input} ${className}`}>
      <label className={`${styles.input__label} ${labelClass}`}>
        {label && label}
      </label>
      {Dummy ? (
        <>
          {Dummy?.type === "reverse" ? (
            <div className={styles.input__dummy__reverse}>
              <span>{Dummy?.text}</span>
              {Dummy.Icon ? (
                <Dummy.Icon
                  onClick={Dummy?.onIconClick ? Dummy?.onIconClick : () => {}}
                  className={styles.input__dummy__reverse__icon}
                />
              ) : null}
            </div>
          ) : (
            <div className={styles.input__dummy}>
              {Dummy.Icon ? <Dummy.Icon /> : null}
              <span>{Dummy.text}</span>
            </div>
          )}
        </>
      ) : (
        <>
          {type !== "password" && (
            <input
              value={value}
              onChange={(e) => {
                onChange(e);
                handleValidity();
              }}
              name={name}
              ref={textInput}
              type={type}
              onInput={onInput}
              minLength={minlength}
              maxLength={maxlength}
              // min={type === "number"? 0: min}
              min={name === "withdrawal" ? min : type === "number" ? 0 : min}
              max={max}
              style={style}
              disabled={disabled}
              pattern={pattern}
              onWheelCapture={(e) => {
                e.target.blur();
              }}
              defaultValue={defaultValue}
              inputMode={inputMode}
              {...prop}
              placeholder={placeholder ? placeholder : ""}
              className={`${
                value?.length < 1
                  ? `${styles.input__input_placeholder}  ${styles.input__input}`
                  : error
                  ? styles.input__input_invalid
                  : styles.input__input
              } ${inputClass || ""}`}
            />
          )}
          {type === "password" && (
            <AntInput.Password
              value={value}
              onChange={(e) => {
                onChange(e);
                // handleValidity();
              }}
              name={name}
              ref={textInput}
              type={type}
              minLength={minlength}
              maxLength={maxlength}
              min={type === "number" ? 0 : min}
              style={style}
              disabled={disabled}
              pattern={pattern}
              onWheelCapture={(e) => {
                e.target.blur();
              }}
              id="myInput"
              defaultValue={defaultValue}
              inputMode={inputMode}
              {...prop}
              placeholder={placeholder ? placeholder : ""}
              className={`${
                value.length === 0
                  ? `${styles.input__input_placeholder}  ${styles.input__input}`
                  : error
                  ? styles.input__input_invalid
                  : styles.input__input
              } ${inputClass || ""} ${styles.input__input_password}`}
            />
          )}

          {/* {type == "password" && (<input type="checkbox" onClick={handlePasswordToggle} style={{marginTop:10}} />)} */}
        </>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {validate && (
          <>
            {/* <span className="ant-typography ant-typography-danger">
              {textInput.current.validationMessage}
            </span> */}
            <span className="ant-typography ant-typography-danger">
              {errorMessage}
            </span>
          </>
        )}
      </div>
      {hint && (
        <div className={`${styles.hint} ${hintClass}`}>
          <span>{hint}</span>
          {/* <div>?</div> */}
        </div>
      )}
    </div>
  );
};

export default Input;
