import PropTypes from "prop-types"
import css from "./FriendList.module.css"
import clsx from "clsx"

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <li className={css.item} key={friend.id}>
        <span className={clsx(css.status, {
          [css.isOnline]: friend.isOnline === true,
          [css.isOffline]: friend.isOnline === false
        })}>{friend.isOnline}</span>
        <img
          className={css.avatar}
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};