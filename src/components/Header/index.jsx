import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <h2 className={styles.logo}>OkuHub</h2>
      </Link>
      <nav>
        <ul>
          {/* <li>
            <a href="#">Флеш-карта</a>
          </li>
          <li>
            <a href="#">Майнд-мап</a>
          </li>
          <li>
            <a href="#">Тест</a>
          </li> */}
          <li>
            <Link to="auth/login">
              <button className="btn">Кіру</button>
            </Link>
          </li>
          <li>
            <Link to="auth/sign-up">
              <button className="btn btn--outline">Тіркелу</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
