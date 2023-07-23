import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/auth-operations';
import defaultPhoto from '../../images/unicorn.svg';
import { Button, UserContainer, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  console.log('User:', user);

  return (
    <UserContainer>
      <img src={defaultPhoto} alt="" width="32" />
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </UserContainer>
  );
};
