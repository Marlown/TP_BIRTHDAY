import React from 'react';
import './MainContent.css';


function MainContent() {
  const name = 'MAX RICHET';
  const message = "Le css c'est pas ton fort !!!!";
  const quote = "La vie est un mystère qu'il faut vivre, et non un problème à résoudre";

  return (
    <div className="main-content">
      <div className="birthday-wishes">
        
        <img src="./TP_images/circle.svg" alt="Birthday" />
        <img src="./TP_images/star.svg" alt="Birthday" />
        <h2>  {name} !</h2>
        
      </div>
      <div className="quote">
      <p>{message}</p>
        <p>{quote}</p>
        <img src="./TP_images/character_1.svg" alt="Birthday" />
        
      </div>
    </div>
  );
}
export default MainContent;
  

  