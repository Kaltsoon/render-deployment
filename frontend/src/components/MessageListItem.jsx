// We can use props object to reuse components, just like regular functions
export default function MessageListItem(props) {
  return <li>{props.message.content}</li>;
}
