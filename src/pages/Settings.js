import { useAuth } from "../hooks";
import styles from "../styles/settings.module.css";

const Settings = () => {
    const auth = useAuth();
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
                <div className={styles.fieldValue}> {auth.user?.name}</div>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldLabel}> Password </div>
                <input type="password" />
            </div>

            <div className={styles.field}>
                <div className={styles.fieldLabel}> Confirm Password</div>
                <input type="password" />
            </div>
        
            <div className={styles.btnGrp}>
                <button className={`button ${styles.editBtn}`}>Edit Profile</button>
            </div>
        </div>
    );
};

export default Settings;