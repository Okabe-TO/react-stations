// DO NOT DELETE
import * as React from 'react'
import { DogImage } from "./DogImage";
import State, { useState } from 'react'; // State の useStateモジュールを import

export function Description() {
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
    <p className='explanation'>
      犬の画像を表示するサイトです
    </p>
    <div className='image-container'>
      < DogImage name={dogUrl} />
    </div>
    <div className='button-container'>
      <button className='button' onClick={ updateUrl }>
        更新
      </button>
    </div>
    </>
  );
}