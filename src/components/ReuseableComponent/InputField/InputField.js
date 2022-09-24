import React from 'react'
import styles from "./input.module.css"

//ICON
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function InputField() {
  return (
    <div>
        <div className={styles.inputField}>
          <input type="text" />
          <FilterAltIcon style={{color: "#C3C3C3", height: "20px"}}/>
        </div>
    </div>
  )
}

export default InputField