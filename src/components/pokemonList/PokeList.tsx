import { FlatList, ActivityIndicator } from "react-native";
import { memo, FC } from "react";

import { PokemonCard } from "../pokemonCard/PokemonCard";
// import { FlatListStyled } from "./PokeList.styled";

interface Props {
	pokemons: PokeData[];
	getPokemons: () => void;
}

export const PokeList: FC<Props> = ({ pokemons, getPokemons }) => {
	const getPokemonRequest = () => {
		getPokemons();
	};

	return (
		<FlatList
			data={pokemons}
			renderItem={({ item }) => <PokemonCard pokemon={item} />}
			keyExtractor={(item) => String(item?.id)}
			numColumns={2}
			showsVerticalScrollIndicator={false}
			onEndReached={getPokemonRequest}
			onEndReachedThreshold={0.1}
			ListFooterComponent={
				<ActivityIndicator
					size="large"
					color="#629460"
					style={{ marginBottom: 60, marginTop: 20 }}
				/>
			}
		/>
	);
};

export default memo(PokeList);
