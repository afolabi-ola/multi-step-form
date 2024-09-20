import styled from 'styled-components';
import useApp from '../hooks/useApp';

function Form() {
  const { name, email, tel, nameError, emailError, telError, dispatch } =
    useApp();

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'inputName', payload: e.target.value });
    dispatch({ type: 'displayNameErrorMessage', payload: '' });
  };
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'inputEmail', payload: e.target.value });
    dispatch({ type: 'displayEmailErrorMessage', payload: '' });
  };
  const handleTelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'inputTel', payload: e.target.value });
    dispatch({ type: 'displayTelErrorMessage', payload: '' });
  };

  return (
    <FormStyle>
      <span>
        <label htmlFor='name'>Name</label>
        <ErrorText>{nameError && nameError}</ErrorText>
      </span>
      <StyledInput
        type='text'
        id='name'
        placeholder='e.g. Stephen King'
        value={name}
        onChange={handleNameInputChange}
        $error={!!nameError} // Pass error as a prop
        required
      />

      <span>
        <label htmlFor='email'>Email Address</label>
        <ErrorText>{emailError && emailError}</ErrorText>
      </span>
      <StyledInput
        type='email'
        id='email'
        placeholder='e.g. stephenking@lorem.com'
        value={email}
        onChange={handleEmailInputChange}
        $error={!!emailError} // Pass error as a prop
        required
      />

      <span>
        <label htmlFor='phone'>Phone Number</label>
        <ErrorText>{telError && telError}</ErrorText>
      </span>
      <StyledInput
        type='tel'
        id='phone'
        placeholder='e.g. +1 234 567 890'
        value={tel}
        onChange={handleTelInputChange}
        $error={!!emailError} // Pass error as a prop
        required
      />
    </FormStyle>
  );
}

export default Form;
const FormStyle = styled.form`
  span {
    display: flex;
    justify-content: space-between;
    label {
      display: block;
      font-weight: var(--font-md);
      margin-bottom: 7px;
    }
  }
`;

const StyledInput = styled.input<{ $error: boolean }>`
  background: transparent;
  padding: 1rem 12px;
  border: 1px solid
    ${({ $error }) => ($error ? 'var(--strawberry-red)' : 'var(--light-gray)')};
  border-radius: 5px;
  margin-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
  font-weight: var(--font-lg);
  color: var(--marine-blue);
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: var(--cool-gray);
  }

  &:focus {
    outline: ${({ $error }) =>
      $error
        ? '1.5px solid var(--strawberry-red)'
        : '1.5px solid var(--marine-blue)'};
    border: none;
  }
  /* Autofill styles for Chrome, Edge, Safari*/

  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important; /* Resets the yellow background */
    font-size: 16px; /* Your custom font size */
    padding: 1rem 12px; /* Your custom padding */
    border: 1px solid var(--light-gray); /* Your custom border color */
    border-radius: 4px; /* Your custom border radius */
    -webkit-text-fill-color: var(--marine-blue) !important;
  }

  /* Autofill styles for Firefox */
  &:-moz-autofill {
    box-shadow: 0 0 0px 1000px white inset !important; /* Resets the background color */
    font-size: 16px; /* Your custom font size */
    padding: 1.05rem 12px; /* Your custom padding */
    border: 1px solid var(--light-gray); /* Your custom border color */
    border-radius: 4px; /* Your custom border radius */
    background-color: white !important; /* Reset the default background color */
    color: var(--marine-blue) !important;
  }
`;

const ErrorText = styled.i`
  color: var(--strawberry-red);
`;