function Friend({ name, isOnline }) {
  let prefix;

  if (isOnline) {
    prefix = <div className="green-dot" />;
  }

  return (
    <li className="friend">
      {prefix}
      {name}
    </li>
  );
}

export default Friend;