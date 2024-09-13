import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Button from '../components/Button';

function FinishUp() {
  return (
    <FinishUpStyles>
      <Header title='Finishing up'>
        <span>Double-check everything looks OK before confirming</span>
      </Header>
      <Main>Content</Main>
      <Footer>
        <Button buttonType='prev'>Go Back</Button>
        <Button buttonType='next'>Next Step</Button>
      </Footer>
    </FinishUpStyles>
  );
}

export default FinishUp;

const FinishUpStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid gray;
`;
