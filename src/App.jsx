import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [error, setError] = useState(false);

  const handlerInputs = (e) => {
    let expresionMedia =
      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);

    if (e.target.name === "email") {
      if (expresionMedia.test(e.target.value)) {
        setErrorEmail(false);
      } else {
        setErrorEmail(true);
      }
    }

    if (e.target.name === "password") {
      if (e.target.value.length < 6 || e.target.value.length > 12) {
        setError(true);
      } else {
        setError(false);
      }
    }
    console.log("email :>> ", email);
    console.log("password :>> ", password);
  };

  return (
    <>
      <div className="container">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="joedo@gmail.com"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => handlerInputs(e)} // Evento En react
            // onchange="handlerInputs()"          // Evento javascript nativo
          />
          {errorEmail && <span className="text-danger">Hay un error</span>}
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Password
          </span>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="*******"
            aria-label="password"
            minLength="6"
            maxLength="12"
            aria-describedby="basic-addon1"
            onChange={handlerInputs}
          />
          {error && <span className="text-danger">Hay un error</span>}
        </div>

        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            console.log("email :>> ", email);
            console.log("password :>> ", password);
            if (email && password) alert("datos enviados");
          }}
        >
          Info
        </button>
        <p>{email}</p>
        <p>{password}</p>
      </div>
    </>
  );
}

export default App
