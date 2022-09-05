import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";

import { PokeList } from "@components";
import PokemonsRequest from "../../apis/getPokemons";

type InitData = {
	data: any;
	isLoading: boolean;
};

const initialData: InitData = {
	data: {},
	isLoading: false,
};

export function PokedexScreen() {
	const [listOfPokemons, setListOfPokemons] = useState(initialData);
	const [listOfPokemonsById, setListOfPokemonsById] = useState<PokeData[]>([]);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		requestPokemons();
	}, []);

	const requestPokemons = () => {
		setListOfPokemons({ ...initialData, isLoading: true });
		PokemonsRequest()
			.getPokemons(counter)
			.then((resp) => {
				if (resp?.count) {
					setListOfPokemons({
						...listOfPokemons,
						data: resp,
						isLoading: false,
					});
					requestPokemonById(resp?.results);
					setCounter(counter + 1);
				}
			})
			.catch(() => setListOfPokemons(initialData));
	};

	const requestPokemonById = async (resp: any) => {
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
				.catch(console.log);
		}

		setListOfPokemonsById([...listOfPokemonsById, ...arrayPoke]);
	};

	return (
		<SafeAreaView>
			<PokeList pokemons={listOfPokemonsById} getPokemons={requestPokemons} />
		</SafeAreaView>
	);
}

export default PokedexScreen;
