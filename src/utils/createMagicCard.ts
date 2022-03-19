import { Card } from "scryfall-sdk";
import { MagicCard } from "./reducers/boardState.reducer";

export default function createMagicCard(card: Card): MagicCard {
	return {
		...card,
		tapped: false
	} as MagicCard;
}