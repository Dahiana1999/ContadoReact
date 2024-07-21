import './App.css';
import cat from './Img/gato.webp';
import './Style/Btn.css';
import { useState } from 'react';




function App() {

  const [numClics, setNumClics] = useState(0);

  const counterClic = () => {
    setNumClics(numClics + 1);
  }

  const resetCounter = () => {
    setNumClics(0);
  }

  const Titulo = (props) => {
    return <h1 className='title'>{props.children}</h1>
  }
  return (
    <div className="App">
      <Titulo>Contador de clics</Titulo>
      <div className='cat-logo-container'>
        <img
          className='cat-logo'
          src={cat}
          alt='logo cat'
        />
      </div>
      <div className='btn-container'>
        <button className='btn1'
        onClick={counterClic}>Contar</button>
        <button className='btn2'
        onClick={resetCounter}>Reiniciar</button>
        <div className='counter'>{numClics}</div>
      </div>
    </div>
  )
}

export default App;