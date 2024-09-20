import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import CalcPlansCont from '../components/CalcPlansCont';

function FinishUp() {
  const navigate = useNavigate();

  const handleNext = (): void => {
    navigate('/thanks');
  };
  const handlePrev = (): void => {
    navigate('/addons');
  };

  return (
    <FinishUpStyles>
      <Header title='Finishing up'>
        <span>Double-check everything looks OK before confirming</span>
      </Header>
      <Main>
        <CalcPlansCont />
      </Main>
      <Footer>
        <Button buttonType='prev' onClick={handlePrev}>
          Go Back
        </Button>
        <Button buttonType='confirm' onClick={handleNext}>
          Confirm
        </Button>
      </Footer>
    </FinishUpStyles>
  );
}

export default FinishUp;

const FinishUpStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
