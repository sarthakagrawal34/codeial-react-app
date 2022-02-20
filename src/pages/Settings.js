import { useState } from "react";
import { useAuth } from "../hooks";
import styles from "../styles/settings.module.css";

const Settings = () => {

    const auth = useAuth();

    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(auth.user ?.name ? auth.user.name : '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [savingForm, setSavingForm] = useState(false);

    const updateProfile = () => {
        
    }

    return (
      <div className={styles.settings}>
        <div className={styles.imgContainer}>
          <img
            src="https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1644591071~hmac=53c882810ea6b302934838d8fb7af074"
            alt=""
          />
        </div>

        <div className={styles.field}>
          <div className={styles.fieldLabel}> Email</div>
          <div className={styles.fieldValue}> {auth.user?.email}</div>
        </div>

        <div className={styles.field}>
          <div className={styles.fieldLabel}> Name</div>
          {editMode ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <div className={styles.fieldValue}> {auth.user?.name}</div>
          )}
        </div>

        {editMode && (
          <>
            <div className={styles.field}>
              <div className={styles.fieldLabel}> Password </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <div className={styles.fieldLabel}> Confirm Password</div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </>
        )}

        <div className={styles.btnGrp}>
          {editMode ? (
            <>
              <button
                className={`button ${styles.saveBtn}`}
                onClick={updateProfile}
              >
                {savingForm ? 'Saving Profile ...' : 'Save Profile'}
              </button>
              <button
                className={`button ${styles.editBtn}`}
                onClick={() => setEditMode(false)}
              >
                Go Back
              </button>
            </>
          ) : (
            <button
              className={`button ${styles.editBtn}`}
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    );
};

export default Settings;