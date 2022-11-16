import { Component } from "react";

export default class Text extends Component {
  addEmoji(text, emoji) {
    return `${text} ${emoji}`;
  }

  render(decoratedText) {
    let text = "I love my Country.";

    if (decoratedText) text = decoratedText;

    return <div>{text}</div>;
  }
}
