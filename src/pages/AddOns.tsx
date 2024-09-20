import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AddOnsService from '../components/AddOnsService';
import useApp from '../hooks/useApp';
import { useNavigate } from 'react-router-dom';

interface AddOnsProps {
  isYearly: boolean;
  isOnlineServiceChecked: boolean;
  isLargerStorageChecked: boolean;
  isCustomizableProfileChecked: boolean;
  dispatch: React.Dispatch<
    | { type: 'onlineServiceToggle'; payload: { title: string; price: number } }
    | { type: 'largerStorageToggle'; payload: { title: string; price: number } }
    | {
        type: 'customizableProfileToggle';
        payload: { title: string; price: number };
      }
  >;
}

function AddOns() {
  const navigate = useNavigate();

  const handleNext = (): void => {
    navigate('/finish');
  };

  const handlePrev = (): void => {
    navigate('/plans');
  };

  const {
    isYearly,
    isOnlineServiceChecked,
    isLargerStorageChecked,
    isCustomizableProfileChecked,
    dispatch,
  }: AddOnsProps = useApp();

  return (
    <AddOnStyles>
      <Header title='Pick add-ons'>
        <span>Add-ons helps enhance your gaming experience.</span>
      </Header>
      <Main>
        <AddOnsService
          title='Online service'
          desc='Access to multiplayer games'
          price={isYearly ? 10 : 1}
          isChecked={isOnlineServiceChecked}
          onCheck={() =>
            dispatch({
              type: 'onlineServiceToggle',
              payload: { title: 'Online service', price: isYearly ? 10 : 1 },
            })
          }
        />
        <AddOnsService
          title='Larger storage'
          desc='Extra 1TB of cloud save'
          price={isYearly ? 20 : 2}
          isChecked={isLargerStorageChecked}
          onCheck={() =>
            dispatch({
              type: 'largerStorageToggle',
              payload: { title: 'Larger storage', price: isYearly ? 20 : 2 },
            })
          }
        />
        <AddOnsService
          title='Customizable Profile'
          desc='Custom theme on your profile'
          price={isYearly ? 20 : 2}
          isChecked={isCustomizableProfileChecked}
          onCheck={() =>
            dispatch({
              type: 'customizableProfileToggle',
              payload: {
                title: 'Customizable Profile',
                price: isYearly ? 20 : 2,
              },
            })
          }
        />
      </Main>
      <Footer>
        <Button buttonType='prev' onClick={handlePrev}>
          Go Back
        </Button>
        <Button buttonType='next' onClick={handleNext}>
          Next Step
        </Button>
      </Footer>
    </AddOnStyles>
  );
}

export default AddOns;

const AddOnStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
