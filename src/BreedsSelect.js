// DO NOT DELETE
import * as React from 'react'
import State, { useState, useEffect } from 'react'

export const BreedsSelect = (props) => {
	const breeds = props.breeds;
	return(
		<select className="breed" >
			{breeds.map(breed => (
				//↑ [配列データ].map( コールバック関数 )
				//↓ オプションの選択値が持つ値をvalueとするが，mapなのでkeyがなければいけない
				<option key={breed} value={breed}>{breed}</option>
			))}
		</select>
	)
}