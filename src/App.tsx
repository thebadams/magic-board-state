import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { getCardByName } from './utils/scryfall'
import {Card} from 'scryfall-sdk';
import CardSearchForm from './components/CardSearchForm';
import { ScryptOptions } from 'crypto';
function App() {
	const [card, setCard] = useState('')
	useEffect(() => {
getCardByName("Commandr's Sphere").then(card => setCard(card.name))
	})
  return (
	<><h1>{card}</h1><CardSearchForm /></>
     
  );
}

export default App;
