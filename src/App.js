import * as React from 'react';
import State, { useState } from 'react';
import './App.css';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    "https:\/\/images.dog.ceo\/breeds\/terrier-border\/n02093754_5975.jpg",
  );

  const apdateUrl = () => {
    const newUrl = "https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_5985.jpg";
    setDogUrl("https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_5985.jpg");
  }

  return (
    <div>
      <header>Dogアプリ</header>
      <p>
        犬の画像を表示するサイトです
      </p>
      <img src={dogUrl}/>
      <br/>
      <button onClick={ apdateUrl }>
        更新
      </button>
    </div>
  );
}
