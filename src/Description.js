// DO NOT DELETE
import * as React from 'react'
import { DogImage } from "./DogImage";
import State, { useState } from 'react'; // State の useStateモジュールを import

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    // dogUrlの初期化
    "https://images.dog.ceo/breeds/kelpie/n02105412_6120.jpg"
  );

  const updateUrl = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setDogUrl(data.message);
      });
    }

  return(
    // 複数タグを返すため，空フラグメントを使用
    <>
    <p className='Explanation'>
      犬の画像を表示するサイトです
    </p>
    <div className='Image-container'>
      < DogImage url={ dogUrl } />
    </div>
    <div className='Button-container'>
      <button className='Button' onClick={ updateUrl }>
        更新
      </button>
    </div>
    </>
  );
}