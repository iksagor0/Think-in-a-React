import React, { useReducer } from "react";
import UserDetails from "./Components/UserDetails";
// import MultipleOne from "./Components/MultipleFromOne/MultipleOne";
// import MultipleTwo from "./Components/MultipleFromOne/MultipleTwo";
import BasicConsept from "./Components/BasicConsept";
// import { UserContext } from "./Context/UserContext";
import { createContext } from "react";

// STYLES
const styles = {
  fontSize: 25,
  fontWeight: 700,
  padding: 20,
};

export const UserContext = createContext(null);

const initalState = {
  username: "iksagor0",
  role: "admin",
  email: "iksagor@gmail.com",
};

const reducer = (state, action) => {
  switch (action) {
    case "value":
      return state;
    default:
      return state;
  }
};

function App() {
  const [user, dispatch] = useReducer(reducer, initalState);
  console.log(initalState);

  return (
    <div style={styles} className="App">
      <UserContext.Provider value={{ userState: user, userDispatch: dispatch }}>
        <UserDetails />
        <BasicConsept />
        {/* <MultipleOne />
        <MultipleTwo /> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
