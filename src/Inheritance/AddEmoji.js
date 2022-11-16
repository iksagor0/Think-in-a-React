import Text from "./Text";

export default class AddEmoji extends Text {
  //   state = {
  //     text: "I love Bangladesh",
  //     emoji: "❤️",
  //   };

  render() {
    // const { text, emoji } = this.state;

    const decoratedText = this.addEmoji("I love Bangladesh", "❤️");

    return super.render(decoratedText);
  }
}
