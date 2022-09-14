import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { HeaderPokemon, ItemPokemon, StatsPokemon } from "./components";
import PokemonsRequest from "../../apis/getPokemons";
import { useAuth } from "@hooks";
import {
	setPokemonStorage,
	removePokemonStorage,
	existPokemonStorage,
} from "@utilities";

export function PokemonScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const { params } = useRoute<RouteProp<any>>();
	const { getPokemonById } = PokemonsRequest();
	const {
		authState: { username },
	} = useAuth();

	const [pokemon, setPokemon] = useState(null);
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () =>
				username ? (
					<Icon
						name="heart"
						solid={isFavorite}
						color="#fff"
						size={20}
						style={{ marginRight: 20 }}
						onPress={() => manageFav()}
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
	}, [navigation, params, username, isFavorite]);

	useEffect(() => {
		getPokemonById(params?.id)
			.then((response) => {
				if (response?.name) {
					setPokemon(response);
					validateFavorite();
				}
			})
			.catch(console.log);
	}, []);

	const manageFav = () => {
		!isFavorite
			? setPokemonStorage(params?.id)
			: removePokemonStorage(params?.id);
		setIsFavorite(!isFavorite);
	};

	const validateFavorite = async () => {
		const result = await existPokemonStorage(params?.id);
		setIsFavorite(result);
	};

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
