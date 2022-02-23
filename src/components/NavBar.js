import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import { useAuth } from '../hooks';
import { useState } from 'react/cjs/react.development';

const NavBar = () => {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState('');
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

      <div className={styles.searchContainer}>
        <img
          className={styles.searchIcon}
          src="https://cdn-icons.flaticon.com/png/128/3031/premium/3031293.png?token=exp=1645633990~hmac=94785a49e3044029c592e750ddeae5b1"
          alt=" "
        />

        <input
          placeholder="Search Users"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {results.length > 0 && (
          <div className={styles.searchResults}>
            <ul>
              {results.map((user) => (
                <li
                  className={styles.searchResultsRow}
                  key={`user-${user._id}`}
                >
                  <Link to={`/users/${user._id}`}>
                    <img
                      src="https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1644591071~hmac=53c882810ea6b302934838d8fb7af074"
                      alt=""
                    />
                  </Link>
                  <span>{user.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right side Navbar */}
      <div className={styles.rightNav}>
        {auth.user && (
          <div className={styles.user}>
            <Link to="/settings">
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
                <Link to="/">Log Out</Link>
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
