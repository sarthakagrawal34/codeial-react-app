import styles from '../styles/navbar.module.css';

const NavBar = () => {
    return (
      <div className={styles.nav}>
        {/* Left side of Navbar */}
        <div className={styles.leftDiv}>
          <a href="/">
            <img
              alt=""
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            />
          </a>
        </div>

        {/* Right side Navbar */}
        <div className={styles.rightNav}>
          <div className={styles.user}>
            <a href="/">
              <img
                alt=""
                src="https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1644591071~hmac=53c882810ea6b302934838d8fb7af074"
                className={styles.userDp}
              />
            </a>
            <span>Sarthak</span>
          </div>
        </div>

        {/* Buttons for log-in , log-out, and register */}
        <div className={styles.navLinks}>
          <ul>
            <li>
              <a href="/">Log In</a>
            </li>
            <li>
              <a href="/">Log Out</a>
            </li>
            <li>
              <a href="/">Register</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default NavBar;