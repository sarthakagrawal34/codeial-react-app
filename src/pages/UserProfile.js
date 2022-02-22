import styles from '../styles/settings.module.css';
// import { useLocation } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUserProfile, addFriend, removeFriend } from '../api';
import { useToasts } from 'react-toast-notifications';
import { Loader } from '../components';
import { useAuth } from '../hooks';

const UserProfile = () => {
  // const location = useLocation();
  // console.log('location', location);
  // const { name,email } = location.state;

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [requestInProgress, setRequestInProgress] = useState(false);
  const { userId } = useParams();
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const auth = useAuth();
  console.log(auth);

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

  const checkIfUserIsAFriend = () => {
      const friends = auth.user.friends;

      const friendsIds = friends.map(friend => friend.to_user._id);
      const index = friendsIds.indexOf(userId);

      if (index !== -1) {
          return true;
      }
      return false;
  };

  const handleAddFriendClick = async () => {
    setRequestInProgress(true);

    const response = await addFriend(userId);
    if (response.success) {
      const { friendship } = response.data;
      auth.updateUserFriends(true, friendship);
      addToast('Friend added successfully', {
        appearance: 'success',
      });
    } else {
      addToast(response.message, {
        appearance: 'error',
      });
    }

    setRequestInProgress(false);
  };

  const handleRemoveFriendClick = async () => {
    setRequestInProgress(true);

    const response = await removeFriend(userId);
    if (response.success) {
      const friendship = auth.user.friends.filter(
        (friend) => friend.to_user._id === userId
      );

      auth.updateUserFriends(false, friendship[0]);
      addToast('Friend removed successfully!', {
        appearance: 'success',
      });
    } else {
      addToast(response.message, {
        appearance: 'error',
      });
    }

    setRequestInProgress(false);
  };


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
        {checkIfUserIsAFriend() ? (
          <button
            className={`button ${styles.saveBtn}`}
            onClick={handleRemoveFriendClick}
          >
            {requestInProgress ? 'Removing friend...' : 'Remove friend'}
          </button>
        ) : (
          <button
            className={`button ${styles.saveBtn}`}
            onClick={handleAddFriendClick}
            disabled={requestInProgress}
          >
            {requestInProgress ? 'Adding friend...' : 'Add friend'}
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
