import React, {FC, useState} from 'react';
import { Card } from 'scryfall-sdk';
import { getCardByName } from '../utils/scryfall'
import {BoardStateAction, MagicCard, BoardStateActions} from '../utils/reducers/boardState.reducer'

interface searchForm {
	setResult: React.Dispatch<React.SetStateAction<Card | null>>;
	dispatchBoardState: React.Dispatch<BoardStateAction>
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
			const card: MagicCard = {
				...result,
				tapped: false
			} as MagicCard
		
		props.dispatchBoardState({type: BoardStateActions.ADD_TO_FIELD, payload: card})
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