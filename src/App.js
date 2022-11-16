// import AddEmoji from "./Inheritance/AddEmoji";

// import AddEmoji from "./Composition/AddEmoji";
// import Text from "./Composition/Text";

// import AddEmoji from "./Composition_two/AddEmoji";
// import Bracket from "./Composition_two/Bracket";
// import Text from "./Composition_two/Text";

// import Bhutan from "./RenderProps/Bhutan";
// import Maldives from "./RenderProps/Maldives";
// import Text from "./RenderProps/Text";

import Bangladesh from "./RenderPropsTwo/Bangladesh";
import Text from "./RenderPropsTwo/Text";

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

      {/* === Composition Two === */}
      {/* <Text>
        {(text) => (
          <AddEmoji text={text}>
            {(textWithEmoji) => <Bracket textWithEmoji={textWithEmoji} />}
          </AddEmoji>
        )}
      </Text> */}

      {/* === RENDER PROPS === */}
      {/* <Text render={(text) => <Bhutan text={text} />} />
      <Text render={(text) => <Maldives text={text} />} /> */}

      {/* === RENDER PROPS 2 === */}
      <Bangladesh render={(country) => <Text country={country} />} />
    </div>
  );
}

export default App;
