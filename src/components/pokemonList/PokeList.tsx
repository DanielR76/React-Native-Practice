import { FlatList, Text } from "react-native";
import React from "react";

import { FlatListStyled } from "./PokeList.styled";

export const PokeList = ({ pokemons }: { pokemons: PokeData[] }) => {
	return (
		<FlatList
			data={pokemons}
			renderItem={({ item }) => <Text>{item.name}</Text>}
			keyExtractor={(item) => String(item.id)}
			numColumns={2}
			showsVerticalScrollIndicator={false}
		/>
	);
};

export default React.memo(PokeList);
