import photo from './eu-foto.jpeg';
import './App.css';

function App() {
  const onClickButton = () => {
    alert ("Fico feliz pelo seu contato! :)")
  }
  return (
    <div className="App">
      <h1 className="frase"> Opa, pode me chamar de Carol!</h1>
      <img src={photo} className="photo-site" alt="foto minha sorrindo."/>
      <p>Esse é o meu primeiro site react!</p>
      <button onClick={onClickButton}>Clica aqui pra o contato!</button>
    </div>
  );
}

export default App;
