import ImgOne from "./assets/images/img.jpg";

import Button from "./components/Button";
import List from "./components/fruts/List";
import Access from "./components/Access";
import ButtonState from "./components/ButtonState";

const App = () => {
  const title = "Mi titulo desde una constante";
  // const urlImage = "https://picsum.photos/200/300";
  const pathImg = "src/assets/images/img.jpg";
  const usuario = false;

  return (
    <>
      <ButtonState />

      <h1 className="text-center">{title.toUpperCase()}</h1>
      <img src={ImgOne} alt={`imagen-${title}`} className="img-view" />

      <Button text="Boton 1" />
      <Button text="Boton 2" />
      <Button text="Boton 3" />

      <Access user={usuario} />
      <List />
    </>
  );
};

export default App;
