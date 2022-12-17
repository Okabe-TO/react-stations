import * as React from 'react';
// Reactと名前が衝突するためStateとしてimportしている？
import State, { useState } from 'react';
import './App.css';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  /**
   * @type {string, void()} 左がURL, 右がURLをセットする関数
   */
  const [dogUrl, setDogUrl] = useState(
    // dogUrlの初期化
    "https://images.dog.ceo/breeds/kelpie/n02105412_6120.jpg"
  );
  
  /**
   * fetchし，得た新たなデータをdogUrlに代入する無名関数をupdateUrlとして宣言
   * */
  const updateUrl = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status = ${response.status}`);
        }
        // response.json()でJavaScriptオブジェクトを取得
        return response.json();
      })
      .then((data) => {
        // MDNを参照すると，jsonのdataに対して，"."でアクセスしていた
        setDogUrl( data.message );
      });
      /* 取得するjsonデータ例
      ** messageを取得したい
       {
            "message": "https://images.dog.ceo/breeds/terrier-dandie/n02096437_3985.jpg",
            "status": "success"
       }
      */
  }

  return (
    <div className='frame'>
      <header>Dogアプリ</header>
      <p className='explanation'>
        犬の画像を表示するサイトです
      </p>

      <div className='image-container'>
        <img className='image' src={dogUrl} />
      </div>
      <br/>

      <div className='button-container'>
        <button className='button' onClick={updateUrl}>
          更新
        </button>
      </div>
    </div>
  );
}
