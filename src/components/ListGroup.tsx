function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  items = [];

  if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        <p>There are no items in the list.</p>
      </>
    );
  }

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
