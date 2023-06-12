import './App.css';
import logo from "../src/assets/LOGO-SADAI-NAILS.jpeg"

function App() {
  const copiarCampo = (idCampo) => {
    var campo = document.getElementById(idCampo);
    var texto = campo.value;

    navigator.clipboard.writeText(texto).then(function() {
      mostrarAlerta("Campo copiado al portapapeles: " + campo.id, 1500);
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
    alerta.style.top = "26%";
    alerta.style.left = "50%";
    alerta.style.transform = "translateX(-50%)";
    alerta.style.zIndex = "9999";
    document.body.appendChild(alerta);

    setTimeout(function() {
      alerta.remove();
    }, tiempo);
  }

  function redirigirWhatsApp() {
    var numero = "3141434680"; // Reemplaza con tu número de teléfono de WhatsApp
    var url = "https://api.whatsapp.com/send?phone=" + numero;
    window.open(url, "_blank");
  }
  return (
    <div className="main-container">
      <img src={logo} alt='logo' className='main-container__logo' />
      <h1>Datos de la cuenta</h1>

      <div className='inputs-container'>
        <div className='inputs-container__data'>
          <label for="cuenta">Cuenta:</label>
          <input className='inputs-container__data__input' type="text" id="cuenta" value="4152 3140 5397 1696" readonly />
          <button className='inputs-container__data__button' onClick={() => copiarCampo('cuenta')}>Copiar Cuenta</button>
        </div>
        <div className='inputs-container__data'>
          <label for="nombre">Nombre de la cuenta:</label>
          <input className='inputs-container__data__input' type="text" id="nombre" value="Perla zurisaday Lopez Cobian" readonly />
          <button className='inputs-container__data__button' onClick={() => copiarCampo('nombre')}>Copiar Nombre</button>
        </div>
        <div className='inputs-container__data'>
          <label for="banco">Banco:</label>
          <input className='inputs-container__data__input' type="text" id="banco" value="BBVA" readonly />
          <button className='inputs-container__data__button' onClick={() => copiarCampo('banco')}>Copiar Banco</button>
        </div>
      </div>

      <h2>Conversación de WhatsApp</h2>

    <button className='inputs-container__data__button button-whats' onClick={redirigirWhatsApp}>Abrir WhatsApp</button>
    </div>
  );
}

export default App;
