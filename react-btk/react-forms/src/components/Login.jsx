import { useRef, useState } from "react";

export default function Login() {

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const emailIsinvalid = !emailValue.includes("@");
    const passwordIsinvalid = passwordValue.length < 6;

    setEmailError(emailIsinvalid);
    setPasswordError(passwordIsinvalid);

    if (!emailIsinvalid && !passwordIsinvalid) {
      // Submit the form
      console.log("Form submitted");
      email.current.value = "";
      password.current.value = "";
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" name="email" ref={email} />
        {emailError && <div className="invalid-feedback d-block">Please enter a valid email address.</div>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" name="password" ref={password} />
        {passwordError && <div className="invalid-feedback d-block">Please enter a valid password (min. 6 characters).</div>}
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button type="reset" className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
