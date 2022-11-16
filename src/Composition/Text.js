export default function Text({ emoji }) {
  let text = "I love my country";

  if (emoji) text = emoji(text, "❤️");

  return <div>{text}</div>;
}
