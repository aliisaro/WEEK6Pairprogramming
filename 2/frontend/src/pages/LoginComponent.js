import React from 'react';
import  useLogin  from "../hooks/useLogin";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField("email");
  const passwordInput = useField("password");

  const { handleLogin } = useLogin(setIsAuthenticated);

  const handler = () => {
    handleLogin(emailInput.value, passwordInput.value);
  };
  
  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handler}>Login</button>
    </div>
  );
};

export default LoginComponent;
