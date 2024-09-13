import styled from 'styled-components';

function Form() {
  return (
    <FormStyle>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' placeholder='e.g. Stephen King' required />

      <label htmlFor='email'>Email Address</label>
      <input
        type='email'
        id='email'
        placeholder='e.g. stephenking@lorem.com'
        required
      />

      <label htmlFor='phone'>Phone Number</label>
      <input type='tel' id='phone' placeholder='e.g. +1 234 567 890' required />
    </FormStyle>
  );
}

export default Form;

const FormStyle = styled.form`
  label {
    display: block;
    font-weight: var(--font-md);
    margin-bottom: 7px;
  }
  input {
    background: transparent;
    padding: 1rem 12px;
    border: 1px solid var(--light-gray);
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
      outline: 1.5px solid var(--marine-blue);
      border: none;
    }

    /* Autofill styles for Chrome, Edge, Safari */
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
  }
`;
