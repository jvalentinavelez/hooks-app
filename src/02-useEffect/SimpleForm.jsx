import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "user1",
    email: "user1@google.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // [name] propiedad computada del objeto
    setformState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("useEffect called!");
    return;
  }, []);

  useEffect(() => {
    console.log("formState changed!");
    return;
  }, [formState]);

  return (
    <>
      <h1>Simple Form </h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="user@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "user1" && <Message />}
    </>
  );
};
