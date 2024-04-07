import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <h2 className={styles.logo}>OkuHub</h2>
      <nav>
        <ul>
          <li>
            <a href="#">Флеш-карта</a>
          </li>
          <li>
            <a href="#">Майнд-мап</a>
          </li>
          <li>
            <a href="#">Тест</a>
          </li>
          <li>
            <a href="#">
              <button className="btn">Кіру</button>
            </a>
          </li>
          <li>
            <a href="#">
              <button className="btn btn--outline">Тіркелу</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
