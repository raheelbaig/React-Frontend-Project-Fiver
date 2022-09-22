import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.dataContainer + " " + styles.name}>
        <h4>Name</h4>
        <img src="/headerIcon.svg" alt="icon" />
        <input type="text" />
      </div>
      <div className={styles.dataContainer + " " + styles.actions}>
        <h4>Actions</h4>
      </div>
      <div className={styles.dataContainer + " " + styles.jobTitle}>
        <h4>Job Title</h4>
        <img src="/headerIcon.svg" alt="icon" />
      </div>
      <div className={styles.dataContainer + " " + styles.company}>
        <h4>Company</h4>
        <img src="/headerIcon.svg" alt="icon" />
      </div>
      <div className={styles.dataContainer + " " + styles.employ}>
        <h4>Empl.</h4>
        <img src="/headerIcon.svg" alt="icon" />
      </div>
      <div className={styles.dataContainer + " " + styles.industry}>
        <h4>Industry</h4>
        <img src="/headerIcon.svg" alt="icon" />
      </div>
      <div className={styles.dataContainer + " " + styles.keywords}>
        <h4>Keywords</h4>
        <img src="/headerIcon.svg" alt="icon" />
      </div>
    </div>
  );
}

export default Header;
