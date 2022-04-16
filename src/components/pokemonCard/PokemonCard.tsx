import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";

import {
	CardStyled,
	SpacingStyled,
	NameStyled,
	NumberStyled,
	ImageStyled,
} from "./Card.styled";

export const PokemonCard = ({ pokemon }: { pokemon: PokeData }) => {
	const handlePress = () => {
		console.log(pokemon.name);
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<CardStyled>
				<SpacingStyled>
					<NumberStyled>{`# ${pokemon.order}`}</NumberStyled>
					<NameStyled>{pokemon.name}</NameStyled>
					<ImageStyled source={{ uri: pokemon.image }}></ImageStyled>
				</SpacingStyled>
			</CardStyled>
		</TouchableWithoutFeedback>
	);
};

export default React.memo(PokemonCard);
