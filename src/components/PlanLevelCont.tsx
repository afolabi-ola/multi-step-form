import styled from 'styled-components';
import PlanLevel from './PlanLevel';
import arcadeImage from '../assets/icon-arcade.svg';
import advanceImage from '../assets/icon-advanced.svg';
import proImage from '../assets/icon-pro.svg';
import { useContext } from 'react';
import { AppContext } from '../App';

interface PlanLevelContProps {
  isYearly: boolean;
}

function PlanLevelCont() {
  const { isYearly }: PlanLevelContProps = useContext(AppContext);

  return (
    <PlanLevelContStyles>
      <PlanLevel
        image={arcadeImage}
        title='Arcade'
        price={isYearly ? '$90/yr' : '$9/mo'}
        isYearly={isYearly}
      />
      <PlanLevel
        image={advanceImage}
        title='Advanced'
        price={isYearly ? '$120/yr' : '$12/mo'}
        isYearly={isYearly}
      />
      <PlanLevel
        image={proImage}
        title='Pro'
        price={isYearly ? '$150/yr' : '$15/mo'}
        isYearly={isYearly}
      />
    </PlanLevelContStyles>
  );
}

export default PlanLevelCont;

const PlanLevelContStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  margin-bottom: 2rem;
`;
