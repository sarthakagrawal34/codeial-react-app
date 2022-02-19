import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import {useAuth} from '../hooks'

const NavBar = () => {
  const auth = useAuth();

  return (
    <div className={styles.nav}>
      {/* Left side of Navbar */}
      <div className={styles.leftDiv}>
        <Link to="/">
          <img
            alt=""
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          />
        </Link>
      </div>

      {/* Right side Navbar */}
      <div className={styles.rightNav}>
        {auth.user && (
          <div className={styles.user}>
            <Link to="/">
              <img
                alt=""
                src="https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1644591071~hmac=53c882810ea6b302934838d8fb7af074"
                className={styles.userDp}
              />
            </Link>
            <span>{auth.user.name}</span>
          </div>
        )}
      </div>

      {/* Buttons for log-in , log-out, and register */}
      <div className={styles.navLinks}>
        <ul>
          {auth.user ? (
            <>
              <li onClick={auth.logout}>
                <Link to= "/">Log Out</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                {/* We use Link tag instead of anchor tag as anchor tag will refresh whole page after clicking it but Link tag will not refresh the page */}
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;