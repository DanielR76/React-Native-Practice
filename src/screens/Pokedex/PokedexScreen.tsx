import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";

import { PokeList } from "@components";
import PokemonsRequest from "../../apis/getPokemons";
import { usePokeList } from "@hooks";

type InitData = {
	data: any;
	isLoading: boolean;
};

const initialData: InitData = {
	data: {},
	isLoading: false,
};

export function PokedexScreen() {
	const { listOfPokemonsById, requestPokemonById } = usePokeList();

	const [listOfPokemons, setListOfPokemons] = useState(initialData);
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

					const temp = resp?.results?.map(
						(val: any) => val?.url?.split("/")?.[6]
					);

					requestPokemonById(temp);
					setCounter(counter + 1);
				}
			})
			.catch(() => setListOfPokemons(initialData));
	};

	return (
		<SafeAreaView>
			<PokeList pokemons={listOfPokemonsById} getPokemons={requestPokemons} />
		</SafeAreaView>
	);
}

export default PokedexScreen;
