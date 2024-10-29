import React, { useRef, useState } from 'react';
import './App.css';
import { RiDeleteBack2Line, RiSubtractFill } from "react-icons/ri";
import { FaDivide } from "react-icons/fa6";

function App() {
  const pantallaRef = useRef(null);
  const [historial, setHistorial] = useState([]);

  const handleClick = (content) => {
    const pantalla = pantallaRef.current;

    if (content === "limpiar") {
      pantalla.textContent = "0";
    } else if (content === "borrar") {
      if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!") {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
    } else if (content === "igual") {
      try {
        if (pantalla.textContent.endsWith("/")) {
          pantalla.textContent = "¡Error!";
        } else {
          const resultado = eval(pantalla.textContent);
          setHistorial([...historial, `${pantalla.textContent} = ${resultado}`]);
          pantalla.textContent = resultado;
        }
      } catch {
        pantalla.textContent = "¡Error!";
      }
    } else {
      if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
        pantalla.textContent = content;
      } else {
        pantalla.textContent += content;
      }
    }
  };

  const limpiarHistorial = () => {
    setHistorial([]);
  };

  return (
    <div className="App">
    <h1 className="titulo">Calculadora React</h1>
    <div className="contenedor-calculadora-historial">
      <div className="calculadora">
        <div className="pantalla" ref={pantallaRef}>0</div>
        <button onClick={() => handleClick("limpiar")} className="boton">c</button>
        <button onClick={() => handleClick("borrar")} className="boton">
          <RiDeleteBack2Line />
        </button>
        <button onClick={() => handleClick("/")} className="boton"><FaDivide /></button>
        <button onClick={() => handleClick("*")} className="boton">x</button>
        <button onClick={() => handleClick("7")} className="boton">7</button>
        <button onClick={() => handleClick("8")} className="boton">8</button>
        <button onClick={() => handleClick("9")} className="boton">9</button>
        <button onClick={() => handleClick("-")} className="boton"><RiSubtractFill /></button>
        <button onClick={() => handleClick("4")} className="boton">4</button>
        <button onClick={() => handleClick("5")} className="boton">5</button>
        <button onClick={() => handleClick("6")} className="boton">6</button>
        <button onClick={() => handleClick("+")} className="boton">+</button>
        <button onClick={() => handleClick("1")} className="boton">1</button>
        <button onClick={() => handleClick("2")} className="boton">2</button>
        <button onClick={() => handleClick("3")} className="boton">3</button>
        <button onClick={() => handleClick("igual")} id='igual' className="boton">=</button>
        <button onClick={() => handleClick("0")} id='cero' className="boton">0</button>
        <button onClick={() => handleClick(".")} className="boton">.</button>
      </div>
      
      <div className="historial">
        <h2 className='titulo-historial'>Historial</h2>
        <ul>
          {historial.map((operacion, index) => (
            <li key={index}>{operacion}</li>
          ))}
        </ul>
        <button onClick={limpiarHistorial} className="boton limpiar-historial">Limpiar Historial</button>
      </div>
    </div>
  </div>
  );
}

export default App;
