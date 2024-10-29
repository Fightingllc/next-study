"use client";
import React, { useState } from "react";
import styles from "./alterBox.module.scss";
export default function AlterBox() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center h-100">
      <ul className={styles.tabbar}>
        <li>
          <svg>
            <use xlinkHref="#dashboardIconFilled" />
          </svg>
        </li>
        <li>
          <svg>
            <use xlinkHref="#cameraIconFilled" />
          </svg>
        </li>
        <li>
          <div className={`${styles.fileAdd} ${isOpen ? styles.open : ""}`}>
            <ul>
              <li className={styles.word}></li>
              <li className={styles.powerpoint}></li>
              <li className={styles.excel}></li>
            </ul>
            <div onClick={handleToggle}>
              <span></span>
            </div>
          </div>
        </li>
        <li>
          <svg>
            <use xlinkHref="#filesIconFilled" />
          </svg>
        </li>
        <li>
          <svg>
            <use xlinkHref="#userIconFilled" />
          </svg>
        </li>
      </ul>
    </div>
  );
}
