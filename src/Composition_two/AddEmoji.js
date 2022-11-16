export default function AddEmoji(props) {
  const { text, children } = props;
  let emoji = "❤️";

  const addEmoji = (txt, emj) => `${txt} ${emj}`;

  // return <div>{addEmoji(text, emoji)}</div>;
  return children(addEmoji(text, emoji));
}
