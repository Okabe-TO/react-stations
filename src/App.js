import * as React from 'react';
// Reactと名前が衝突するためStateとしてimportしている？
import State, { useState } from 'react';
import './App.css';

/**
 * 
 * @type {React.FC}
 */

export const App = () => {
  const image = document.getElementById('image');
  /**
   * @type {string, void()} 左がURL, 右がURLをセットする関数
   */
  const [dogUrl, setDogUrl] = useState(
    // dogUrlの初期化
    "https://images.dog.ceo/breeds/kelpie/n02105412_6120.jpg"
  );
  
  /**
   * fetchし，得た新たなデータをdogUrlに代入する無名関数をapdateUrlとして宣言
   * */
  const apdateUrl = () => {
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
    <div>
      <header>Dogアプリ</header>
      <p>
        犬の画像を表示するサイトです
      </p>

      <img id="image" src={dogUrl}/>
      <br/>

      <button onClick={ apdateUrl }>
        更新
      </button>
    </div>
  );
}
