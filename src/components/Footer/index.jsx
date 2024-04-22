import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h4>OkuHub</h4>
      <hr className={styles.horizontalLine} />
      <p className={styles}>&copy; 2024 OkuHub. All right reserved</p>
    </div>
  );
};

export default Footer;
