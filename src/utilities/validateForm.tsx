const validateName = (value: string) => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(value);
};
const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};
const validateTel = (value: string) => {
  const telRegex = /^\d{10,14}$/;
  return telRegex.test(value);
};

function validateForm(name: string, email: string, tel: string) {
  const nameIsValid = validateName(name);
  const emailIsValid = validateEmail(email);
  const telIsValid = validateTel(tel);

  return { nameIsValid, emailIsValid, telIsValid };
}

export default validateForm;
