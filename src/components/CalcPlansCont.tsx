import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useApp from '../hooks/useApp';

function CalcPlansCont() {
  const { addOnDetails, planDetails, isYearly } = useApp();

  const getAddonTotal = addOnDetails.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  const allTotal = getAddonTotal + planDetails.price;

  return (
    <CalcPlansContStyles>
      <CalcPlansStyle>
        <PlanTypeStyle>
          <div>
            <h3>
              {planDetails.desc} ({isYearly ? 'Yearly' : 'Monthly'})
            </h3>
            <h3>
              ${planDetails.price}/{isYearly ? 'yr' : 'mo'}
            </h3>
          </div>
          <Link to={'/plans'}>Change</Link>
        </PlanTypeStyle>
        <hr />
        <AddOnTypeStyle>
          {addOnDetails.map((addOn) => (
            <div key={addOn.title}>
              <p>{addOn.title}</p>
              <span>
                +${addOn.price}/{isYearly ? 'yr' : 'mo'}
              </span>
            </div>
          ))}
        </AddOnTypeStyle>
      </CalcPlansStyle>
      <TotalStyle>
        <p>Total ({isYearly ? 'per year' : 'per month'})</p>
        <span>
          +${allTotal}/{isYearly ? 'yr' : 'mo'}
        </span>
      </TotalStyle>
    </CalcPlansContStyles>
  );
}

export default CalcPlansCont;

const CalcPlansContStyles = styled.div``;

const CalcPlansStyle = styled.div`
  width: 27rem;
  padding: 20px 15px;
  border-radius: 10px;
  background-color: var(--light-blue);
 hr{
  color: red;
 }
`;

const PlanTypeStyle = styled.div`
  display: block;
  margin-bottom: 25px;
  h3 {
    margin-bottom: 3px;
    font-size: 1rem;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  a {
    color: var(--cool-gray);
    font-weight: var(--font-md);
  }
  a:hover {
    color: var(--purplish-blue);
  }
`;

const AddOnTypeStyle = styled.div`
  display: block;
  margin-top: 20px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    p {
      font-size: 0.9rem;
      color: var(--cool-gray);
      font-weight: var(--font-md);
    }
    span {
      font-size: 0.8rem;
      color: var(--marine-blue);
      font-weight: var(--font-md);
    }
  }
`;

const TotalStyle = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 0.9rem;
    color: var(--cool-gray);
    font-weight: var(--font-md);
    padding: 0 15px;
  }
  span {
    color: var(--purplish-blue);
    font-weight: var(--font-lg);
    padding: 0 15px;
  }
`;
