import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PlanLevelCont from '../components/PlanLevelCont';
import DurationToggle from '../components/DurationToggle';
import { useNavigate } from 'react-router-dom';

function Plans() {
  const navigate = useNavigate();
  const handleNext = (): void => {
    navigate('/addons');
  };
  const handlePrev = (): void => {
    navigate('/user');
  };
  return (
    <PlansStyle>
      <Header title='Select your plan'>
        <span>You have the option of monthly or yearly billing</span>
      </Header>
      <Main>
        <PlanLevelCont />
        <DurationToggle />
      </Main>
      <Footer>
        <Button buttonType='prev' onClick={handlePrev}>
          Go Back
        </Button>
        <Button buttonType='next' onClick={handleNext}>
          Next Step
        </Button>
      </Footer>
    </PlansStyle>
  );
}

export default Plans;

const PlansStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
