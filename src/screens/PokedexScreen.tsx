import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";

import { PokeList } from "../components";
import PokemonsRequest from "../apis/getPokemons";

type InitData = {
	data: any;
	isLoading: boolean;
};

const initialData: InitData = {
	data: {},
	isLoading: false,
};

export default function PokedexScreen() {
	const [listOfPokemons, setListOfPokemons] = useState(initialData);
	const [listOfPokemonsById, setListOfPokemonsById] = useState<PokeData[]>([]);

	useEffect(() => {
		requestPokemos();
	}, []);

	const requestPokemos = () => {
		setListOfPokemons({ ...initialData, isLoading: true });
		PokemonsRequest()
			.getPokemons(20)
			.then((resp) => {
				if (resp) {
					setListOfPokemons({
						...listOfPokemons,
						data: resp,
						isLoading: false,
					});
					requestById(resp?.results);
				}
			})
			.catch(() => setListOfPokemons(initialData));
	};

	const requestById = async (resp: any) => {
		const arrayPoke: PokeData[] = [];

		for await (const pokemon of resp) {
			const valPoke = pokemon?.url?.split("/")?.[6];
			await PokemonsRequest()
				.getPokemonById(valPoke)
				.then((pokeDetails: any) => {
					arrayPoke.push({
						id: pokeDetails?.id,
						name: pokeDetails?.name,
						type: pokeDetails?.types?.[0]?.type?.name,
						order: pokeDetails?.order,
						image:
							pokeDetails?.sprites?.other?.["official-artwork"]?.front_default,
					});
				})
				.catch((e) => console.log(e));
		}

		setListOfPokemonsById([...arrayPoke]);
	};

	return (
		<SafeAreaView>
			<PokeList pokemons={listOfPokemonsById} />
		</SafeAreaView>
	);
}
