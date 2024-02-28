import React from 'react';
import  useSignup  from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField("email");
  const passwordInput = useField("password");

  const { handleSignup } = useSignup(setIsAuthenticated);

  const handler = () => {
    handleSignup(emailInput.value, passwordInput.value);
  };
  
  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input type="email" {...emailInput} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password" {...passwordInput}/>
      </label>
      <br />
      <button onClick={handler}>Signup</button>
    </div>
  );
};

export default SignupComponent;
