// import AddEmoji from "./Inheritance/AddEmoji";

// import AddEmoji from "./Composition/AddEmoji";
// import Text from "./Composition/Text";

import AddEmoji from "./Composition_two/AddEmoji";
import Bracket from "./Composition_two/Bracket";
import Text from "./Composition_two/Text";

// STYLES
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
      {/* <AddEmoji>{(emoji) => <Text emoji={emoji} />}</AddEmoji> */}

      {/* === Composition Two=== */}
      <Text>
        {(text) => (
          <AddEmoji text={text}>
            {(textWithEmoji) => <Bracket textWithEmoji={textWithEmoji} />}
          </AddEmoji>
        )}
      </Text>
    </div>
  );
}

export default App;
