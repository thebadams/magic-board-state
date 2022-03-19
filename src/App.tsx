import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { getCardByName } from './utils/scryfall'
import {Card} from 'scryfall-sdk';
import CardSearchForm from './components/CardSearchForm';
import { ScryptOptions } from 'crypto';
import SearchResult from './components/SearchReasult';
function App() {
	const [card, setCard] = useState('')
	useEffect(() => {
getCardByName("Commandr's Sphere").then(card => setCard(card.name))
	})
	const [result, setResult] = useState<Card | null>(null);
  return (
	<>
		<h1>{card}</h1>
		<CardSearchForm setResult={setResult}/>
		{result!== null ? <SearchResult result={result}/>: <h2>...loading</h2>}
	</>
     
  );
}

export default App;
