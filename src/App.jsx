import PropTypes from "prop-types";
import imgOne from "./assets/images/img.jpg";


// components -------------------
const MyButton = (props) => {

  const handleEventClick = (contenido) => {
    console.log("Click en el boton " + contenido);
  }

  return (
    <button onClick={() => handleEventClick(props.text)}>
      {props.text}
    </button>
  );
};




// Prop Types of component ------

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
}

const MyList = (props) => {
  const { fruts } = props;

  return (
    <div>
      <ul>
        {fruts.map((frut, index) => <li key={index}>{frut}</li>)}
      </ul>
    </div>
  )
}


const Access = ({ user }) => (user ? <h4>Online</h4> : <h4>Offline</h4>);



const App = () => {
  const title = "Mi titulo desde una constante";
  // const urlImage = "https://picsum.photos/200/300";
  const pathImg = "src/assets/images/img.jpg";
  const usuario = false;
  const fruts = ['manzana', 'pera', 'frutilla'];

  return (
    <>
      <h1 className="text-center">{title.toUpperCase()}</h1>
      <img src={imgOne} alt={`imagen-${title}`} className="img-view" />
      <MyButton text="Boton 1" />
      <MyButton text="Boton 2" />
      <MyButton text="Boton 3" />

      <Access user={usuario} />
      <MyList fruts={fruts} />
    </>
  );
};

export default App;
