// import AddEmoji from "./Inheritance/AddEmoji";
import AddEmoji from "./Composition/AddEmoji";
import Text from "./Composition/Text";

const styles = {
  fontSize: 25,
  fontWeight: 700,
  padding: 20,
};

function App() {
  return (
    <div style={styles} className="App">
      {/* === Inheritance === */}
      {/* <AddEmoji /> */}

      {/* === Composition === */}
      <AddEmoji>{(emoji) => <Text emoji={emoji} />}</AddEmoji>
    </div>
  );
}

export default App;
