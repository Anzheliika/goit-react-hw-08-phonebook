import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import {
  selectIsLoggedIn,
  selectUserName,
} from 'redux/auth/auth-selectors';
import { UserName } from './UserMenu.styled';
import avatar from './avatar.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);


  return (
    isLoggedIn && (
      <div>
        <img src={avatar} alt="" width="32" />
        <UserName>Welcome, {name}</UserName>
        <button type="button" onClick={() => dispatch(logOut())}>
          Log Out
        </button>
      </div>
    )
  );
};
