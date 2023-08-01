const MyButton = () => {
  return <button>I`am a button</button>;
};

const Access = (props) => {
  const { name } = props;

  return <h1>My name is {name}</h1>;
};

const NotAccess = (props) => {
  const { name } = props;

  return <h1>El usuario {name}, no tiene acceso al sistema</h1>;
};

const App = () => {
  const title = "Mi titulo desde una constante";
  const urlImage = "https://picsum.photos/200/300";
  const usuario = false;

  return (
    <>
      <h1 className="text-center">{title.toUpperCase()}</h1>
      <img src={urlImage} alt={`imagen-${title}`} className="img-view" />
      <MyButton />

      {
        usuario ? <Access name="Mario Sandoval" /> : <NotAccess name="Carlos Sandova" />
      }
    </>
  );
};

export default App;
