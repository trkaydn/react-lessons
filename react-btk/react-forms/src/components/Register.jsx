import { useState } from "react";

export default function Register() {

  const [passwordNotEqual, setPasswordNotEqual] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    // console.log(formData.get("email"));
    // console.log(formData.get("password"));
    // console.log(formData.get("confirmPassword"));
    // console.log(formData.get("fullName"));
    // console.log(formData.getAll("hobbies"));

    const data = Object.fromEntries(formData.entries());
    data.hobbies = formData.getAll("hobbies");

    setPasswordNotEqual(data.password !== data.confirmPassword);

    if (!passwordNotEqual) {
      //submit the form
      console.log(data);
      setPasswordNotEqual(false);
      e.target.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Register</h1>
        <p>Please enter your information!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label" required>
          Name Surname
        </label>
        <input type="text" className="form-control" id="fullName" name="fullName" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" name="email" />
      </div>
      <div className="row mb-3">
        <div className="col 6">
          <label htmlFor="password" className="form-label">
          Password
          </label>
        <input type="password" className="form-control" id="password" name="password" required />
        </div>
        <div className="col-6">
          <label htmlFor="confirmPassword" className="form-label" required>
            Confirm Password
          </label>
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
          {passwordNotEqual && <div className="invalid-feedback d-block">Passwords do not match.</div>}
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="hobbies" className="form-label">
            Hobbies
          </label>
          <div className="card card-body text-bg-light">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="hobbies" id="cars" value="cars" />
              <label htmlFor="cars" className="form-check-label">Cars</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="hobbies" id="music" value="music" />
              <label htmlFor="music" className="form-check-label">Music</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="hobbies" id="movies" value="movies" />
              <label htmlFor="movies" className="form-check-label">Movies</label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button type="reset" className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
