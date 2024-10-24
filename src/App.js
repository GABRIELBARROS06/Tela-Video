import React from 'react'; // Adicione o import de useState
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="main-video">
        <h1>20 SINAIS BÁSICOS PARA FALAR UTILIZANDO A LIBRAS!</h1>
        <div className="video-container">
          <video controls>
            <source src="path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="professor-info">
          <img 
            src="path-to-professor-image.jpg" 
            alt="" 
            className="professor-avatar"
          />
          <div className="professor-details">
            <p><strong>Profª Débora</strong></p>
            <span className="label-professor">Professor</span>
            <span className="dot"></span>
          </div>
          <div className="date">
            <p>03/04/24</p>
          </div>
        </div>

        <div className="description">
          <h1>Quer aprender Libras de forma prática e rápida?
             Neste vídeo, você vai descobrir 
             20 sinais básicos que vão te ajudar a ter uma 
             comunicação simples e eficaz com qualquer pessoa surda. 
             Ao acompanhar os sinais junto comigo,
             você já começa a praticar e memorizar! 🚀</h1>
        </div>
      </div>
      
      <div className="video-thumbnails">
        {['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4'].map((video, index) => (
          <div key={index} className="thumbnail-card">
            <video controls>
              <source src={`path-to-${video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};



export default App;
