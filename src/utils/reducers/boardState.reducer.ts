import {Card} from 'scryfall-sdk';

export interface MagicCard extends Card {
	tapped: boolean;
}

export enum BoardStateActions {
	ADD_TO_FIELD = 'ADD TO FIELD',
	REMOVE_FROM_FIELD = 'REMOVE FROM FIELD',
	ADD_TO_GRAVEYARD = 'ADD TO GRAVEYARD',
	REMOVE_FROM_GRAVE_YARD = 'REMOVE FROM GRAVEYARD',
	ADD_TO_EXILE = 'ADD TO EXILE',
	TAP = 'TAP',
	UNTAP = 'UNTAP'
}


export interface PlayerBoardState {
	field: MagicCard[];
	graveyard: MagicCard[];
	exile: MagicCard[]; 
}

export interface BoardStateAction {
	type: BoardStateActions;
	payload: MagicCard;	
}

export default function boardStateReducer(state: PlayerBoardState, action: BoardStateAction) {
	const {type, payload} = action
	switch (type) {
		case BoardStateActions.ADD_TO_FIELD:
			//logic to change board state to add payload to field
			state.field.push(payload);
			return state
		case BoardStateActions.REMOVE_FROM_FIELD:
			// logic to change board state to remove payload from field
			const newField = state.field.filter(card => card !== payload);
			return {...state, field: newField};
		case BoardStateActions.ADD_TO_GRAVEYARD:
			// logic to change board astate to add payload to graveyard
			state.graveyard.push(payload);
			return state
		case BoardStateActions.REMOVE_FROM_GRAVE_YARD:
			//logic to change board state to remove payload from grave yard
			const newGraveYard = state.graveyard.filter(card => card !== payload);
			return {
				...state,
				graveyard: newGraveYard
			}
		case BoardStateActions.ADD_TO_EXILE:
			//logic to change board state to add card to exile
			state.exile.push(payload);
			return state;
		case BoardStateActions.TAP:
			//logic to change board state to tap card
			payload.tapped = true;
			return state
		case BoardStateActions.UNTAP:
			//logic to change board state to untap card
			payload.tapped = false;
			return state
		default:
			return state
			break;
	}
}