import React, {useState, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import { getCardByName } from './utils/scryfall'
import {Card} from 'scryfall-sdk';
import CardSearchForm from './components/CardSearchForm';
import SearchResult from './components/SearchReasult';
import boardStateReducer, { PlayerBoardState } from './utils/reducers/boardState.reducer';
import CardInfo from './components/CardInfo';
function App() {
	const [card, setCard] = useState('')
	useEffect(() => {
getCardByName("Commandr's Sphere").then(card => setCard(card.name))
	})

	const [result, setResult] = useState<Card | null>(null);
	const initialState: PlayerBoardState = {
		exile: [],
		graveyard: [],
		field: []
	}
	const [boardState, dispatch] = useReducer(boardStateReducer, initialState);
  return (
	<>
		<h1>{card}</h1>
		<CardSearchForm setResult={setResult} dispatchBoardState={dispatch}/>
		{result!== null ? <SearchResult result={result} changeBoardState={dispatch}/>: <h2>...loading</h2>}
		{boardState.field.map(card => <CardInfo name={card.name}/>)}
	</>
     
  );
}

export default App;
