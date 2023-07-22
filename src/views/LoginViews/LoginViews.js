import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Form,
  Input,
  Label,
  LoginContainer,
  Text,
  Title,
} from './LoginViews.module';

const LoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginContainer>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Title>Log in</Title>

        <Label>
          Email
          <Input
            type="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
            required
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
            required
          />
        </Label>

        <Button type="submit">Log in</Button>

        <Text>
          Do not have an account?
          <span>
            <NavLink to="/register">Register</NavLink>
          </span>
        </Text>
      </Form>
    </LoginContainer>
  );
};

export default LoginView;
