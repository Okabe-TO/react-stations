// DO NOT DELETE
import * as React from 'react'
import State, { useState, useEffect } from 'react' // State の useStateモジュールを import
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
	// breedsの初期値は，[]
	const [breeds, setBreeds] = useState([])
	const [selectedBreed, setSelectedBreed] = useState("")
	const setDogList = () => {
		fetch("https://dog.ceo/api/breeds/list/all")
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error, status = ${response.status}`)
				}
				return response.json()
			})
			.then((data) => {
				// breedsにリストをセット
				setBreeds(Object.keys(data.message))
			})
	}
	const select = (e) => {

	}
	useEffect(() => {
		// useEffectは，第二引数に空配列を指定することで，
		// 最初のrender時のみ第一引数の関数を実行
		setDogList()
	}, [])
	return (
		< BreedsSelect breeds = {breeds} />
	)
}
