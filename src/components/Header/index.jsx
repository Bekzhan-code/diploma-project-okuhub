import React from "react";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.auth);

  const onLogout = () => {
    window.localStorage.removeItem("token");
    dispatch(logout());
    navigate("/auth/login");
  };
  return (
    <div className={styles.header}>
      <Link to="/">
        <h2 className={styles.logo}>OkuHub</h2>
      </Link>
      <nav>
        <ul>
          {loggedIn ? (
            <li>
              <button className="btn" onClick={onLogout}>
                Шығу
              </button>
            </li>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
