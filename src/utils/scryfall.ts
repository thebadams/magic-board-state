import {Card, Cards} from 'scryfall-sdk';

export async function getCardByName(name: string) {
	const card = await Cards.byName(name, true);
	return card

}