import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AddOnsService from '../components/AddOnsService';
import { useContext, useState } from 'react';
import { AppContext } from '../App';

interface AddOnsProps {
  isYearly: boolean;
}

function AddOns() {
  
  const { isYearly }: AddOnsProps = useContext(AppContext);

  const [isOnlineServiceChecked, setIsOnlineServiceChecked] = useState(false);
  const [isLargerStorageChecked, setIsLargerStorageChecked] = useState(false);
  const [isCustomizableProfileChecked, setIsCustomizableProfileChecked] =
    useState(false);

  const handleOnlineServiceChecked = () => {
    setIsOnlineServiceChecked(!isOnlineServiceChecked);
  };

  const handleLargerStorageChecked = () => {
    setIsLargerStorageChecked(!isLargerStorageChecked);
  };

  const handleCustomizableProfileChecked = () => {
    setIsCustomizableProfileChecked(!isCustomizableProfileChecked);
  };

  return (
    <AddOnStyles>
      <Header title='Pick add-ons'>
        <span>Add-ons helps enhance your gaming experience.</span>
      </Header>
      <Main>
        <AddOnsService
          title='Online service'
          desc='Access to multiplayer games'
          price={isYearly === true ? '+$10/yr' : '+$1/mo'}
          isChecked={isOnlineServiceChecked}
          onCheck={handleOnlineServiceChecked}
        />
        <AddOnsService
          title='Larger storage'
          desc='Extra 1TB of cloud save'
          price={isYearly === true ? '+$20/yr' : '+$2/mo'}
          isChecked={isLargerStorageChecked}
          onCheck={handleLargerStorageChecked}
        />
        <AddOnsService
          title='Customizable Profile'
          desc='Custom theme on your profile'
          price={isYearly === true ? '+$20/yr' : '+$2/mo'}
          isChecked={isCustomizableProfileChecked}
          onCheck={handleCustomizableProfileChecked}
        />
      </Main>
      <Footer>
        <Button buttonType='prev'>Go Back</Button>
        <Button buttonType='next'>Next Step</Button>
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
