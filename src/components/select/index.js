import React, { useState } from "react";
import { CaretDown } from "../../assets/svg";
import styles from "./styles.module.scss";

const Select = ({
  label,
  placeholder,
  options,
  value,
  name,
  onSelect,
  success,
  error,
  hint,
  Dummy,
  className,
  labelClass,
  inputClass,
  hintClass,
  ...prop
}) => {
  const [display, setDisplay] = useState("");
  const [show, setShow] = useState(false);

  const handleSelect = (item) => {
    onSelect(item.value);
    setDisplay(item.render);
    setShow(false);
  };
  return (
    <div
      onBlur={() => {
        setTimeout(() => {
          setShow(false);
        }, 300);
      }}
      className={`${styles.input} ${className}`}
    >
      <label
        className={`${styles.input__label} ${labelClass}`}
        style={{ marginTop: 10 }}
      >
        {label && label}
      </label>

      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShow(!show);
        }}
        className={styles.input__input}
      >
        {value && (
          <div>
            {display ||
              (options &&
                options.find((item) => item.value === value)?.render) ||
              ""}
          </div>
        )}
        {!value && <div style={{color:"#ACAAAA"}}>{display || placeholder}</div>}
        <CaretDown
          className={`${show && styles.open} ${styles.caret}`}
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>

      {show && (
        <div className={[styles.input__optionHoder]}>
          {options &&
            options
              .filter((i) =>
                i.hasOwnProperty("disabled") ? !i.disabled : true
              )
              .map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(item)}
                  className={styles.option}
                >
                  {item.render}
                </div>
              ))}
        </div>
      )}

      {hint && (
        <div className={`${styles.hint} ${hintClass}`}>
          <span>{hint}</span> <div>?</div>
        </div>
      )}
    </div>
  );
};

export default Select;
