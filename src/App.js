import React from 'react';
import './App.css'; // Asegúrate de que los estilos estén en src/App.css

function App() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="#index">Inicio</a></li>
          <li><a href="Servicios.html" target="_blank" rel="noopener noreferrer">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      
      <a href="https://wa.me/541155876993" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src="img/icons8-whatsapp-48.png" alt="WhatsApp" />
      </a>
      
      <div className="page-container">
        <header id="inicio">
          <div className="header-content">
            <h1 className="Titulo-Principal">Marisol Dávila</h1>
            <h2>Descubriendo la Psicología Integral más allá del Psicoanálisis Tradicional</h2>
            <p id="intro">Bienvenidos a mi página, donde la psicología se fusiona con un enfoque multidisciplinario 
              para comprender la complejidad de la mente humana. Aunque mi formación principal se encuentra 
              en el campo del psicoanálisis, mi práctica va más allá de las sesiones tradicionales en el diván. 
              En mi enfoque terapéutico, considero esencial explorar todos los aspectos que conforman la vida 
              de mis pacientes. No solo me limito a analizar la relación entre el inconsciente y el comportamiento, 
              sino que también indago en el contexto familiar, las relaciones sociales, el entorno laboral e incluso 
              el papel del género en la identidad personal. Creo firmemente en la importancia de adoptar un enfoque 
              holístico que abarque todas las dimensiones del ser humano. Cada individuo es único, y entender su 
              experiencia en su totalidad es fundamental para facilitar un cambio significativo y duradero. A lo largo 
              de esta página, encontrarás recursos, artículos y reflexiones que exploran diversos aspectos de la 
              psicología y el bienestar emocional. Mi objetivo es proporcionar un espacio donde puedas encontrar 
              apoyo, comprensión y orientación en tu camino hacia el crecimiento personal y la autorrealización. 
              Exploremos y reflexionemos juntos cómo podemos iniciar un viaje hacia una vida más plena y satisfactoria!
            </p>
          </div>
        </header>

        <section className="image-section1">
          <div className="image-container">
            <img src="img/imagen para adulto.jpeg" alt="Imagen 1" />
            <img src="img/imagen para infantil.jpeg" alt="Imagen 2" />
          </div>
          <div className="image-container">
            <img src="img/img 3 1920x1080 px.jpeg" alt="Imagen 3" />
            <img src="img/img 4.jpeg" alt="Imagen 4" />
          </div>
        </section>
        
        <div className="divider"></div>

        <footer id="contacto">
          <h2>Contacto</h2>
          <form action="https://formspree.io/f/mrbzeezn" method="POST">
            <label htmlFor="nombre">Nombre:</label><br />
            <input type="text" id="nombre" name="nombre" required /><br /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />
            <label htmlFor="mensaje">Mensaje:</label><br />
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea><br /><br />
            <button type="submit">Enviar</button>
          </form>

         <div className="divider"></div>        
          
         <p id="seguime-en">Buscame en:</p>
          
         <div className="social-icons">
            <a href="https://www.instagram.com/psi.davilamarisol/" target="_blank" rel="noopener noreferrer">
              <img src="img/icons8-instagram-48.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/marisol-d%C3%A1vila-4330181b9/" target="_blank" rel="noopener noreferrer">
              <img src="img/icons8-linkedin-48.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://wa.me/541155876993" target="_blank" rel="noopener noreferrer">
              <img src="img/icons8-whatsapp-48.png" alt="Watsapp" className="social-icon" />
            </a>
         </div>
         
         <div className="divider"></div>

         <p id="villa"> 
              Sesiones presenciales en Villa del Parque - CABA
                                    
              <a href="https://www.google.com/maps/place/Villa+del+Parque,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6059135,-58.4900444,15z/data=!3m1!4b1!4m6!3m5!1s0x95bcc9df44319d89:0x72e02046997c8cef!8m2!3d-34.6048651!4d-58.4905535!16s%2Fm%2F03qn8px?entry=ttu" 
                target="_blank" rel="noopener noreferrer"> 
                <span className="location-icon">&#x1F4CD;</span> 
              </a>
         </p>

         <  div className="divider"></div>


         <p id="derechos"> &copy; Marisol Dávila - Todos los derechos reservados</p>
        
        </footer>
      </div>
    </>
  );
}

export default App;
