import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/auth-operations';
import {
  Button,
  Form,
  Input,
  Label,
  RegisterContainer,
  Text,
  Title,
} from './RegisterView.module';

const RegisterView = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterContainer>
      <Title>Registration</Title>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

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
          <Input type="password" name="password" />
        </Label>

        <Button type="submit">Register</Button>
        <Text>
          Already have an account?
          <span>
            <NavLink to="/login">Log in</NavLink>
          </span>
        </Text>
      </Form>
    </RegisterContainer>
  );
};

export default RegisterView;
