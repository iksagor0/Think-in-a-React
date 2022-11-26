import React from "react";
// import UserDetails from "./Components/UserDetails";
import BasicConsept from "./useReducer/BasicConsept";

// STYLES
const styles = {
  fontSize: 25,
  fontWeight: 700,
  padding: 20,
};

function App() {
  return (
    <div style={styles} className="App">
      {/* <UserDetails /> */}
      <BasicConsept />
    </div>
  );
}

export default App;
