import React, {FC}from 'react';
import { Card} from 'scryfall-sdk';
import { BoardStateAction } from '../utils/reducers/boardState.reducer';
interface searchResult {
	result: Card;
	changeBoardState: React.Dispatch<BoardStateAction>;
}

const SearchResult: FC<searchResult> = (props) => {
	return (
		<><h2>
			{props.result.name}
		</h2><img src={props.result.image_uris?.png} alt={props.result.name} /></>
	)
}

export default SearchResult;
