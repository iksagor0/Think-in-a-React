export default function AddEmoji(props) {
  const addEmoji = (text, emoji) => `${text} ${emoji}`;

  return props.children(addEmoji);
}
