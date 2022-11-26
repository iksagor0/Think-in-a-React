import React from "react";
import UserDetails from "./Components/UserDetails";

// STYLES
const styles = {
  fontSize: 25,
  fontWeight: 700,
  padding: 20,
};

function App() {
  return (
    <div style={styles} className="App">
      <UserDetails />
    </div>
  );
}

export default App;
