import React, {FC, useState} from 'react';
import { Card } from 'scryfall-sdk';
import { getCardByName } from '../utils/scryfall'

interface searchForm {
	setResult: React.Dispatch<React.SetStateAction<Card | null>>
}

const  SearchForm: FC<searchForm> = (props) => {
	const [textValue, setTextValue] = useState('Mountain')
	async function searchCard(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		console.log(e)
		const input = document.getElementById('card-name')
		console.log(input)
		const result = await getCardByName(textValue)
		console.log(result);
		props.setResult(result);
	}
	return (<form onSubmit={searchCard}>
		<input type="text" id='card-name' value={textValue} onChange={(e) =>{
			const value = e.target.value
			setTextValue(value);
		}}/>
		<button type='submit'>Search</button>
	</form >)
}

export default SearchForm;