const Button = (props) => {
  const handleEventClick = (contenido) => {
    console.log("Click en el boton " + contenido);
  };

  return (
    <button onClick={() => handleEventClick(props.text)}>{props.text}</button>
  );
};

export default Button;
