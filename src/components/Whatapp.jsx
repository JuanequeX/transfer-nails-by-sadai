import React from 'react'

const Whatapp = () => {
  const redirigirWhatsApp = () => {
    var numero = "3141434680"; // Reemplaza con tu número de teléfono de WhatsApp
    var url = "https://api.whatsapp.com/send?phone=" + numero;
    window.open(url, "_blank");
  }
  return (
    <>
    <div className='inputs-container__data'>
      <h2 className='whats-title'>WhatsApp</h2>
      <button className='inputs-container__data__button button-whats' onClick={redirigirWhatsApp}>Enviar Captura</button>
    </div>
    </>
  )
}

export default Whatapp
