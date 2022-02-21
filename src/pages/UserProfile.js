import styles from '../styles/settings.module.css';

const UserProfile = () => {
    const user = {};
    
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
            <div className={styles.fieldValue}> {user?.email}</div>
        </div>

        <div className={styles.field}>
            <div className={styles.fieldLabel}> Name</div>
            <div className={styles.fieldValue}> {user?.name}</div>
        </div>

        <div className={styles.btnGrp}>
            <button className={`button ${styles.editBtn}`}> Add Friend </button>
            <button className={`button ${styles.editBtn}`}> Remove Friend </button>
        </div>
        </div>
    );
};

export default UserProfile;
