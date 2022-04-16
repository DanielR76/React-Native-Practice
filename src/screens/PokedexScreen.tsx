import { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import PokemonsRequest from "../apis/getPokemons";

type InitData = {
	data: any;
	isLoading: boolean;
};

type PokeData = {
	id: string;
	name: string;
	type: string;
	order: string;
	image: string;
};

const initialData: InitData = {
	data: {},
	isLoading: true,
};

export default function PokedexScreen() {
	const [listOfPokemons, setListOfPokemons] = useState(initialData);
	const [listOfPokemonsById, setListOfPokemonsById] = useState([]);

	useEffect(() => {
		PokemonsRequest()
			.getPokemons(20)
			.then((resp) => {
				// requestById(resp);
				setListOfPokemons({ ...listOfPokemons, data: resp, isLoading: false });
			})
			.catch(() => setListOfPokemons({ ...initialData, isLoading: false }));
	}, []);

	const requestById = async (resp: any) => {
		const arrayPoke: any = [];

		for await (const pokemon of resp.results) {
			// console.log(pokemon.url);
			fetch(pokemon.url)
				.then((pokeDetails: any) => {
					console.log(pokeDetails);
					arrayPoke.push({
						id: pokeDetails?.id,
						name: pokeDetails?.name,
						// type: pokeDetails?.types[0]?.type.name,
						order: pokeDetails?.order,
						image:
							pokeDetails?.sprites?.other["official-artwork"].front_default,
					});
					// console.log(arrayPoke);
				})
				.catch((e) => console.log(e));
		}

		// setListOfPokemonsById([...listOfPokemonsById, ...arrayPoke]);
	};

	return (
		<SafeAreaView>
			<Text>PokedexScreen</Text>
			{listOfPokemons.data?.results?.map((poke: any, index: number) => (
				<Text key={index}>{poke.name}</Text>
			))}
		</SafeAreaView>
	);
}
