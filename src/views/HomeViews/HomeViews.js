import { HomeContainer, HomeItems, HomeLinks, HomeTitle, StyledLink } from './HomeViews.module';

const HomeViews = () => {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to your personal Phonebook!</HomeTitle>
      <HomeLinks>
        <HomeItems>
          <StyledLink to="/login">Log in!</StyledLink>
        </HomeItems>

        <HomeItems>
          <StyledLink to="/register">Register!</StyledLink>
        </HomeItems>
      </HomeLinks>
    </HomeContainer>
  );
};

export default HomeViews;
