// DO NOT DELETE
import * as React from 'react'
import State, { useState, useEffect } from 'react' // State の useStateモジュールを import


export const DogListContainer = () => {
	// breedsの初期値は，[]
	const [breeds, setBreeds] = useState([])
	useEffect(() => {
		// useEffectは，第二引数に空配列を指定することで，
		// 最初のrender時のみ第一引数の関数を実行
		fetch("https://dog.ceo/api/breeds/list/all")
			.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error, status = ${response.status}`)
			}
			return response.json()
		})
		.then((data) => {
			// リストを返す
			setBreeds(Object.keys(data.message))
		})
	}, [])
	return (
		<select name="breed" >
			{breeds.map(breed => (
				//↑ [配列データ].map( コールバック関数 )
				//↓ オプションの選択値が持つ値をvalueとするが，mapなのでkeyがなければいけない
				<option key={breed} value={breed}>{breed}</option>
			))}
		</select>
	)
}
