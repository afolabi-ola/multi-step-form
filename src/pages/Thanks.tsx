import styled from 'styled-components';
import thanksChecked from '../assets/icon-thank-you.svg';

function Thanks() {
  return (
    <ThanksStyles>
      <ThanksSubContStyles>
        <div>
          <img src={thanksChecked} alt={thanksChecked} />
        </div>
        <h1>Thank you!</h1>
        <p>
          <span>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at{' '}
            <a href='mailto:support@loremgaming.com'>
              support@loremgaming.com.
            </a>
          </span>
        </p>
      </ThanksSubContStyles>
    </ThanksStyles>
  );
}

export default Thanks;

const ThanksStyles = styled.div`
  width: 28rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThanksSubContStyles = styled.div`
  display: block;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  p {
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--cool-gray);
    font-weight: var(--font-md);
    span {
      width: 100%;
      text-align: center;
    }
    a {
      display: inline-block;
      text-decoration: none;
      color: var(--cool-gray);
    }
  }
`;
