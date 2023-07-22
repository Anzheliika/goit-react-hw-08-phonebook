import { StyledLink } from './AuthNav.module';


export default function AuthNav() {
  return (
    <nav>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login"> Log in</StyledLink>
    </nav>
  );
}
