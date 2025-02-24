const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Example password validation: Minimum 6 characters, at least one number, one letter
  const passwordRegex = /^[^\s]{6,}$/;
  return passwordRegex.test(password);
};

export const validateForm = (email, password) => {
  const newError = {};
  if (!validateEmail(email)) {
    newError.email = "Kindly provide a valid email address.";
    console.log(newError);
  }
  if (!validatePassword(password)) {
    newError.password = "Password is too short (minimum is 6 characters).";
    console.log(newError);
  }
  return newError;
};

export const validateOtp = (otp) => {
  // Example password validation: Minimum 6 characters, at least one number, one letter
  const otpRegex = /^\d{6}$/;
  return otpRegex.test(otp);
};

export const validateemail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const newError = {};

  if (!emailRegex.test(email)) {
    newError.email = "Kindly provide a valid email address.";
  }
  return newError;
};
