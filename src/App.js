import * as React from 'react';
import State, { useState } from 'react';
import './App.css';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  const [dogUrl] = useState(
    "https:\/\/images.dog.ceo\/breeds\/terrier-border\/n02093754_5975.jpg"
  );
  return (
    <div>
      <title>ReactによるDogアプリ</title>
      <header>Dogアプリ</header>
      <p>
        犬の画像を表示するサイトです
      </p>
      <img src={dogUrl}/>
    </div>
  );
}
