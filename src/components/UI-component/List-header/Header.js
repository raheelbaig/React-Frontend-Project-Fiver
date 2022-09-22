import React from "react";
import styles from "./header.module.css";

//ICONS
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.dataContainer + " " + styles.name}>
        <h4>Name</h4>
        <div className={styles.icons}>
          <div className={styles.arrowIcon}>
            <ArrowDropUpIcon />
          </div>
          <div className={styles.arrowIcon}>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className={styles.inputField}>
          <input type="text" />
          <FilterAltIcon style={{color: "#C3C3C3", height: "20px"}}/>
        </div>
      </div>
      <div className={styles.dataContainer + " " + styles.actions}>
        <h4>Actions</h4>
      </div>
      <div className={styles.dataContainer + " " + styles.jobTitle}>
        <h4>Job Title</h4>
        <div className={styles.icons}>
          <div className={styles.arrowIcon}>
            <ArrowDropUpIcon />
          </div>
          <div className={styles.arrowIcon}>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
      <div className={styles.dataContainer + " " + styles.company}>
        <h4>Company</h4>
        <div className={styles.icons}>
          <div className={styles.arrowIcon}>
            <ArrowDropUpIcon />
          </div>
          <div className={styles.arrowIcon}>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className={styles.inputField}>
          <input type="text" />
          <FilterAltIcon style={{color: "#C3C3C3", height: "20px"}}/>
        </div>
      </div>
      <div className={styles.dataContainer + " " + styles.employ}>
        <h4>Empl.</h4>
        <div className={styles.icons}>
          <div className={styles.arrowIcon}>
            <ArrowDropUpIcon />
          </div>
          <div className={styles.arrowIcon}>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
      <div className={styles.dataContainer + " " + styles.industry}>
        <h4>Industry</h4>
        <div className={styles.icons}>
          <div className={styles.arrowIcon}>
            <ArrowDropUpIcon />
          </div>
          <div className={styles.arrowIcon}>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
      <div className={styles.dataContainer + " " + styles.keywords}>
        <h4>Keywords</h4>
        <div className={styles.icons}>
          <div className={styles.arrowIcon}>
            <ArrowDropUpIcon />
          </div>
          <div className={styles.arrowIcon}>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
