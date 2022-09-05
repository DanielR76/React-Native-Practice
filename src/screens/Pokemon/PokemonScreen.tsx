import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { HeaderPokemon, ItemPokemon, StatsPokemon } from "./components";
import PokemonsRequest from "../../apis/getPokemons";
import { useAuth } from "@hooks";
import { setPokemonStorage } from "@utilities";

export function PokemonScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const { params } = useRoute<RouteProp<any>>();
	const { getPokemonById } = PokemonsRequest();
	const {
		authState: { username },
	} = useAuth();

	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () =>
				username ? (
					<Icon
						name="heart"
						color="#fff"
						size={20}
						style={{ marginRight: 20 }}
						onPress={() => setPokemonStorage(params?.id)}
					/>
				) : null,
			headerLeft: () => (
				<Icon
					name="arrow-left"
					color="#fff"
					size={20}
					style={{ marginLeft: 20 }}
					onPress={navigation.goBack}
				/>
			),
		});
	}, [navigation, params]);

	useEffect(() => {
		getPokemonById(params?.id)
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
			<ItemPokemon types={pokemon?.types} />
			<StatsPokemon stats={pokemon?.stats} />
		</ScrollView>
	);
}

export default PokemonScreen;
