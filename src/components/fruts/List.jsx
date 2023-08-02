import Item from "./Item";

const List = () => {
  const fruts = ["manzana", "pera", "frutilla"];
  return (
    <ul>
      {fruts.map((frut, index) => (
        <Item key={index} frut={frut} />
      ))}
    </ul>
  );
};

export default List;
