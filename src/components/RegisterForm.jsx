import { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");

  const fullName = firstName + " " + lastName;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username >>>>>>", username);
    console.log("age >>>>>>", age);
    console.log("password >>>>>>", password);

    // TODO: Submit to API
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="firstName">firstName</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </fieldset>

      <p>{fullName}</p>

      <fieldset>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
      </fieldset>
      
      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  )
}

export default RegisterForm;