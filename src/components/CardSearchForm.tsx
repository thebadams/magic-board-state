import React, {useState} from 'react';
import { getCardByName } from '../utils/scryfall'


export default function CardSearchForm() {
	const [textValue, setTextValue] = useState('Mountain')
	async function searchCard(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		console.log(e)
		const input = document.getElementById('card-name')
		console.log(input)
		const result = await getCardByName(textValue)
		console.log(result);
	}
	return (<form onSubmit={searchCard}>
		<input type="text" id='card-name' value={textValue} onChange={(e) =>{
			const value = e.target.value
			setTextValue(value);
		}}/>
		<button type='submit'>Search</button>
	</form >)
}
