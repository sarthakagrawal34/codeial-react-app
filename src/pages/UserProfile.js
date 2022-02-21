import styles from '../styles/settings.module.css';
// import { useLocation } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUserProfile } from '../api';
import { useToasts } from 'react-toast-notifications';
import { Loader } from '../components';

const UserProfile = () => {
    // const location = useLocation();
    // console.log('location', location);
    // const { name,email } = location.state;

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const { userId } = useParams();
    const { addToast } = useToasts();
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const response = await fetchUserProfile(userId);

            if (response.success) {
                setUser(response.data.user);
            } else {
                addToast(response.message, {
                    appearance: 'error',
                });

                return navigate('/');
            }

            setLoading(false);
        }

        getUser();
    }, [userId, navigate, addToast]);
    
    if (loading) {
      return <Loader />;
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
          <div className={styles.fieldValue}> {user.email}</div>
        </div>

        <div className={styles.field}>
          <div className={styles.fieldLabel}> Name</div>
          <div className={styles.fieldValue}> {user.name}</div>
        </div>

        <div className={styles.btnGrp}>
          <button className={`button ${styles.saveBtn}`}> Add Friend </button>
          <button className={`button ${styles.saveBtn}`}>
            {' '}
            Remove Friend{' '}
          </button>
        </div>
      </div>
    );
};

export default UserProfile;
