import React from "react";
import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField("");
  const passwordInput = useField("");
  const passwordInput2 = useField("");

  const { handleSignup } = useSignup(setIsAuthenticated);

  const handleSignupClick = () => {
    // Check if passwords match
    if (passwordInput.value !== passwordInput2.value) {
      alert("Passwords don't match. Please try again.");
      return;
    }
    // Call handleSignup only if passwords match
    handleSignup(emailInput.value, passwordInput.value);
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input type="email" placeholder="write your email" {...emailInput} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          placeholder="write password"
          {...passwordInput}
        />
      </label>
      <br />
      <label>
        Write password again:
        <input
          type="password"
          placeholder="write password again"
          {...passwordInput2}
        />
      </label>
      <br />
      <button onClick={handleSignupClick}>Signup</button>
    </div>
  );
};

export default SignupComponent;
