import styled from 'styled-components';
import PlanLevel from './PlanLevel';
import arcadeImage from '../assets/icon-arcade.svg';
import advanceImage from '../assets/icon-advanced.svg';
import proImage from '../assets/icon-pro.svg';
import useApp from '../hooks/useApp';

interface PlanLevelContProps {
  isToggled: boolean;
}

function PlanLevelCont() {
  const { isToggled }: PlanLevelContProps = useApp();

  return (
    <PlanLevelContStyles>
      <PlanLevel
        image={arcadeImage}
        title='Arcade'
        price={isToggled ? 90 : 9}
      />
      <PlanLevel
        image={advanceImage}
        title='Advanced'
        price={isToggled ? 120 : 12}
      />
      <PlanLevel image={proImage} title='Pro' price={isToggled ? 150 : 15} />
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
