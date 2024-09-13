import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PlanLevelCont from '../components/PlanLevelCont';
import DurationToggle from '../components/DurationToggle';

function Plans() {
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
        <Button buttonType='prev'>Go Back</Button>
        <Button buttonType='next'>Next Step</Button>
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
