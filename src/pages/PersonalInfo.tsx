import styled from 'styled-components';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';
import Main from '../components/Main';
import { useNavigate } from 'react-router-dom';
import useApp from '../hooks/useApp';
import validateForm from '../utilities/validateForm';

const PersonalInfo = () => {
  const { name, email, tel, dispatch } = useApp();

  const navigate = useNavigate();

  const formIsValid = validateForm(name, email, tel);
  console.log(formIsValid);

const handleNextForm = (): void => {
  if (!formIsValid.nameIsValid) {
    dispatch({
      type: 'displayNameErrorMessage',
      payload: 'Name field is required',
    });
  }
  if (!formIsValid.emailIsValid) {
    dispatch({
      type: 'displayEmailErrorMessage',
      payload: 'Invalid email address',
    });
  }
  if (!formIsValid.telIsValid) {
    dispatch({
      type: 'displayTelErrorMessage',
      payload: 'Invalid phone number',
    });
  }
  if (
    formIsValid.nameIsValid &&
    formIsValid.emailIsValid &&
    formIsValid.telIsValid
  ) {
    navigate('/plans');
  }
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
