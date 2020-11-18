import React, { useState } from "react";
import Input from "../../Components/Input";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [sex, setSex] = useState("male");
  return (
    <div className="flex content-center justify-center bg-blue-400">
      <h3 className="flex content-center justify-center size-2xl">Signup</h3>
      <form className="py-12 px-8 bg-gray-600 m-6">
        <Input
          placeholder="First Name"
          type="text"
          value={firstName}
          onValueChange={(text) => setFirstName(text)}
        />
        <br />
        <Input
          placeholder="Last Name"
          type="text"
          value={lastName}
          onValueChange={(text) => setLastName(text)}
        />
        <br />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onValueChange={(text) => setEmail(text)}
        />
        <br />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onValueChange={(text) => setPassword(text)}
        />
        <br />
        <Input
          placeholder="Confirm Password"
          type="password"
          value={cPassword}
          onValueChange={(text) => setCPassword(text)}
        />
        <br />
        Sex:
        <input
          checked={sex === "male" ? true : false}
          onChange={() => setSex("male")}
          className="m-4"
          name="sex"
          type="radio"
        />
        Male:
        <input
          checked={sex === "female" ? true : false}
          onChange={() => setSex("female")}
          className="m-4"
          name="sex"
          type="radio"
        />
        Female:
        <br />
        <button className="px-6 py-3 bg-blue-600 rounded focus:outline-none float-right text-white s">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Signup;
