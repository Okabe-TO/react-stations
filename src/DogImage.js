// DO NOT DELETE
import * as React from 'react'

export const DogImage = (props) => {
	// 犬種を抽出
	//const dogBreed = (props.url).split(/\/+/).slice(3, 4);
	// 犬種: {dogBreed} で犬種の
	//const dogUrl = props.url;
	return(
    	// ここのコンポーネントの抽出したい
		<img className='Image'
        src={props.url}
        alt="犬の写真"
		/>
	)
}