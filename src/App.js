import * as React from 'react'
import './App.css'
//import dogImage from 'https:\/\/images.dog.ceo\/breeds\/terrier-border\/n02093754_5975.jpg';

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <header>Dogアプリ</header>
      <p>
        犬の画像を表示するサイトです
      </p>
      <img
        src="https:\/\/images.dog.ceo\/breeds\/terrier-border\/n02093754_5975.jpg"
        alt="dogImage"
      />
    </div>
  );
}
