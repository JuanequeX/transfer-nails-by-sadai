import React from 'react'
import { Data } from './Data'

const Inputs = () => {
  const copiarCampo = (idCampo) => {
    var campo = document.getElementById(idCampo);
    var texto = campo.innerText;

    navigator.clipboard.writeText(texto).then(function() {
      mostrarAlerta(campo.id +" ha sido copiado", 800);
    }, function(err) {
      console.error("Error al copiar el campo: ", err);
    });
  }

  const mostrarAlerta = (mensaje, tiempo) => {
    var alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.style.backgroundColor = "gray";
    alerta.style.color = "white";
    alerta.style.borderRadius = "10px";
    alerta.style.padding = "10px";
    alerta.style.position = "fixed";
    alerta.style.textTransform = "uppercase";
    alerta.style.top = "26%";
    alerta.style.left = "50%";
    alerta.style.transform = "translateX(-50%)";
    alerta.style.zIndex = "9999";
    document.body.appendChild(alerta);

    setTimeout(function() {
      alerta.remove();
    }, tiempo);
  }
  return (
    <>
      <h1>Datos de la cuenta</h1>
      <div className='inputs-container'>
        {
          Data.map(item => (
            <div className='inputs-container__data' key={item.id}>
              <label className='inputs-container__data__title' htmlFor={item.campo}>{item.title}</label>
              <label className='inputs-container__data__input' id={item.campo} readOnly>{item.value}</label>
              <button className='inputs-container__data__button' onClick={() => copiarCampo(item.campo)}>{item.buttonText}</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Inputs
