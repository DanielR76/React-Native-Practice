import { useCallback } from "react";
import { SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/core";

import { getPokemonStorage } from "@utilities";
import { PokeList } from "@components";
import { useAuth, usePokeList } from "@hooks";
import { NotAuth, NotList } from "./components";

export function FavoriteScreen() {
	const {
		authState: { username },
	} = useAuth();
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
			{username ? (
				listOfPokemonsById.length > 0 ? (
					<PokeList pokemons={listOfPokemonsById} />
				) : (
					<NotList />
				)
			) : (
				<NotAuth />
			)}
		</SafeAreaView>
	);
}

export default FavoriteScreen;
