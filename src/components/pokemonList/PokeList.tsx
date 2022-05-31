import { FlatList } from "react-native";
import React from "react";

import { PokemonCard } from "../pokemonCard/PokemonCard";
// import { FlatListStyled } from "./PokeList.styled";

export const PokeList = ({ pokemons }: { pokemons: PokeData[] }) => {
	return (
		<FlatList
			data={pokemons}
			renderItem={({ item }) => <PokemonCard pokemon={item} />}
			keyExtractor={(item) => String(item.id)}
			numColumns={2}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export default React.memo(PokeList);
