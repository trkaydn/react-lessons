import { useRef } from "react";

export default function Login() {

  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);

    email.current.value = "";
    password.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" name="email" ref={email} />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" name="password" ref={password} />
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button type="reset" className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
