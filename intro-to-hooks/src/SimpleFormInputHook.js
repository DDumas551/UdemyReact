import React from "react";
import useInputState from "./Hooks/useInputState";

export default function SimpleFormInputHook() {
  const [email, updateEmail, resetEmail] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");
  return (
    <div>
      <h1>Email is: {email}</h1>
      <input
        type="text"
        value={email}
        onChange={updateEmail}
        placeholder="Email"
        />
      <button onClick={resetEmail}>Submit</button>
      <div>
        <h1>Password is: {password}</h1>
        <input
          type="text"
          value={password}
          onChange={updatePassword}
          placeholder="Password"
        />
        <button onClick={resetPassword}>Submit</button>
      </div>
    </div>
  );
}
