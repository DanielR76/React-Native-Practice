import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

import PokemonsRequest from "../apis/getPokemons";

export default function PokemonScreen() {
	// const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const route = useRoute<RouteProp<any>>();
	const { getPokemonById } = PokemonsRequest();

	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		getPokemonById(route.params?.id)
			.then((response) => setPokemon(response))
			.catch(console.log);
	}, []);

	return (
		<View>
			<Text>PokemonScreen</Text>
		</View>
	);
}
