import styled from 'styled-components';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import { useNavigate } from 'react-router-dom';

const PersonalInfo = () => {
  const navigate = useNavigate();

  const handleNextForm = (): void => {
    navigate('/plans');
  };

  return (
    <PersonalInfoStyles>
      <Header title='Personal info'>
        <>Please provide your name, email address, and phone number.</>
      </Header>
      <Main>
        <Form />
      </Main>

      <Footer>
        <span></span>
        <Button buttonType='next' onClick={handleNextForm}>
          Next Step
        </Button>
      </Footer>
    </PersonalInfoStyles>
  );
};

export default PersonalInfo;

const PersonalInfoStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
