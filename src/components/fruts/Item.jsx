const Item = (props) => {
  const { index, frut } = props;
  return <li key={index}>{frut}</li>;
};

export default Item;
