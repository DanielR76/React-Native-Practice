import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

import { HeaderPokemon } from "./components/HeaderPokemon";
import PokemonsRequest from "../../apis/getPokemons";

export function PokemonScreen() {
	// const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const route = useRoute<RouteProp<any>>();
	const { getPokemonById } = PokemonsRequest();

	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		getPokemonById(route.params?.id)
			.then((response) => response.name && setPokemon(response))
			.catch(console.log);
	}, []);

	if (!pokemon) return null;

	return (
		<ScrollView>
			<HeaderPokemon
				name={pokemon?.name}
				order={pokemon?.order}
				image={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
				type={pokemon?.types?.[0]?.type?.name}
			/>
		</ScrollView>
	);
}

export default PokemonScreen;
