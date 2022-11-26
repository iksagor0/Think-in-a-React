import React from "react";
// import UserDetails from "./Components/UserDetails";
import MultipleOne from "./Components/MultipleFromOne/MultipleOne";
import MultipleTwo from "./Components/MultipleFromOne/MultipleTwo";

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
      {/* <BasicConsept /> */}
      <MultipleOne />
      <MultipleTwo />
    </div>
  );
}

export default App;
