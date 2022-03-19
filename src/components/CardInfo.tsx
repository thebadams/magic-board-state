import React, {FC} from "react";

interface CardInfoProps {
	name: string;
}

const CardInfo: FC<CardInfoProps> = (props) => {
	return (
		<h1>{props.name}</h1>
	)

}

export default CardInfo;
