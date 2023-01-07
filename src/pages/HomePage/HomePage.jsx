import { H1, Link } from './HomePage.styled';

const HomePage = () => {
  return (
    <main>
      <H1>Hello, this is Phonebook</H1>
      <div>
        In this application you can save your contacts. To do this, you need to
        <br />
        <br />
        <Link to={'/register'}>REGISTER</Link>
        <br />
        <br /> or <br />
        <br />
        <Link to={'/login'}>LOGIN</Link> <br />
      </div>
    </main>
  );
};

export default HomePage;
