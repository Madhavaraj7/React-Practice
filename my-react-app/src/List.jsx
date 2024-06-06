function List() {
  const fruits = ["Apple", "Orange", "grape", "Bannana"];

  const items = fruits.map((fruit) => <li>{fruit}</li>);

  return <ul>{items}</ul>;
}

export default List;
