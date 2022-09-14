import { useCallback } from "react";
import { SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/core";

import { getPokemonStorage } from "@utilities";
import { PokeList } from "@components";
import { usePokeList } from "@hooks";

export function FavoriteScreen() {
	const { listOfPokemonsById, requestPokemonById } = usePokeList();

	useFocusEffect(
		useCallback(() => {
			requestPokemons();
		}, [])
	);

	const requestPokemons = async () => {
		const temp = await getPokemonStorage();
		requestPokemonById(temp);
	};

	return (
		<SafeAreaView>
			<PokeList pokemons={listOfPokemonsById} />
		</SafeAreaView>
	);
}

export default FavoriteScreen;
