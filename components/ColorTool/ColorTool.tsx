import styles from "../../styles/ColorTool.module.css";
import React from "react";
import { ChromePicker } from "react-color";

const ColorTool = () => {
  return (
    <>
      <div className={styles.colorPicker}>
        <h1 className={styles.hexColorCode}>#0bca74</h1>
        <button className={styles.buttonSelected}>hex</button>
        <button className={styles.button}>rgb</button>
      </div>
    </>
  );
};

export default ColorTool;
