import styles from '../styles/home.module.css';
import { useAuth } from '../hooks';
import { Link } from 'react-router-dom';

const FriendsList = () => {
    const auth = useAuth();
    const { friends } = auth.user;

    return (
      <div className={styles.friendsList}>
        <div className={styles.header}>Friends</div>

        {friends && friends.length === 0 && (
          <div className={styles.noFriends}>No Friends Found!!</div>
        )}

        {friends &&
          friends.map((friend) => (
            <div key={`friend-${friend._id}`}>
              <Link className={styles.friendsItem} to={`/user/${friend._id}`}>
                <div className={styles.friendsImg}>
                  <img
                    src="https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1644591071~hmac=53c882810ea6b302934838d8fb7af074"
                    alt=""
                  />
                </div>
                      <div className={styles.friendsName}>{ friend.to_user.email }</div>
              </Link>
            </div>
          ))}
      </div>
    );
};



export default FriendsList;