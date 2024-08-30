import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export const App = () => {
  const [mensajeEncriptado, setMensajeEncriptado] = useState("");


  const handleClickEncriptar = async () => {
    const texto = document.getElementById("textarea-encriptar").value
    const mensaje = {
      mensajeParaEncriptar: texto
    };
    try {
      const response = await fetch("http://localhost:3002/encriptacion/mensajeinicial", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(mensaje)
      });

      if (response.ok) {
        const result = await response.json();
        document.getElementById("textarea-desencriptar").value = result.data
        console.log("Mensaje enviado con exito:", result);
      } else {
        console.error("Error al enviar el mensaje:", response.status);
      }
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  }

  const handleClickCopiar = () => {
    const textoSalida = document.getElementById("textarea-desencriptar");
    textoSalida.select()
    document.execCommand("copy")
  }

  const handleClickDesencriptar = async () => {
    const texto = document.getElementById("textarea-encriptar").value
    const mensaje = {
      mensajeEncriptado: texto
    };
    try {
      const response = await fetch("http://localhost:3002/encriptacion/mensajefinal", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(mensaje)
      });

      if (response.ok) {
        const result = await response.json();
        document.getElementById("textarea-desencriptar").value = result.data
        console.log("Mensaje enviado con exito:", result);
      } else {
        console.error("Error al enviar el mensaje:", response.status);
      }
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  }

  return (
    <div id='container-app'>
      <section id='section-letra'>
        <img src="./public/letra.png" alt="" />
      </section>
      <section id='section-encriptar'>
        <textarea id="textarea-encriptar" cols="30" rows="10" placeholder='Ingrese el texto aqui'></textarea>
        <p id='p-encriptar'>Solo letras minusculas y sin acentos</p>
        <div id='encriptar-botones'>
          <button id='button-encriptar' onClick={() => handleClickEncriptar()}>
            Encriptar
          </button>
          <button id='button-desencriptar' onClick={() => handleClickDesencriptar()}>
            Desencriptar
          </button>
        </div>
      </section>
      <section id='section-desencriptar'>
        <textarea id="textarea-desencriptar" cols="30" rows="10" readOnly placeholder='Ingresa el texto que desees encriptar o desencriptar'></textarea>
        <button id='button-copiar' onClick={() => handleClickCopiar()}>copiar</button>
      </section>
    </div>
  )
}

export default App
