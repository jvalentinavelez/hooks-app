import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "User Prueba",
  email: "user1test@google.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "Mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};
