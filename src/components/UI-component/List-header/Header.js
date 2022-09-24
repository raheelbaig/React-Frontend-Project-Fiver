import React from "react";
import styles from "./header.module.css";
import ArrowComponent from "../../ReuseableComponent/Arrows/ArrowComponent";
// import InputField from "../../ReuseableComponent/InputField"

//ICONS


import InputField from "../../ReuseableComponent/InputField/InputField";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.dataContainer + " " + styles.name}>
        <h4>Name</h4>
        <ArrowComponent/>
        <InputField />
      </div>
      <div className={styles.dataContainer + " " + styles.actions}>
        <h4>Actions</h4>
      </div>
      <div className={styles.dataContainer + " " + styles.jobTitle}>
        <h4>Job Title</h4>
        <ArrowComponent/>
        <InputField />
      </div>
      <div className={styles.dataContainer + " " + styles.company}>
        <h4>Company</h4>
        <ArrowComponent/>
        <InputField />
      </div>
      <div className={styles.dataContainer + " " + styles.employ}>
        <h4>Empl.</h4>
        <ArrowComponent/>
        <InputField />
      </div>
      <div className={styles.dataContainer + " " + styles.industry}>
        <h4>Industry</h4>
        <ArrowComponent/>
        <InputField />
      </div>
      <div className={styles.dataContainer + " " + styles.keywords}>
        <h4>Keywords</h4>
        <ArrowComponent/>
        <InputField />
      </div>
    </div>
  );
}

export default Header;
