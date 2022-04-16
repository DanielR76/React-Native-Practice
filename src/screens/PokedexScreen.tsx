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
	isLoading: false,
};

export default function PokedexScreen() {
	const [listOfPokemons, setListOfPokemons] = useState(initialData);
	const [listOfPokemonsById, setListOfPokemonsById] = useState<PokeData[]>([]);

	useEffect(() => {
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
	}, []);

	const requestById = async (resp: any) => {
		const arrayPoke: PokeData[] = [];

		for await (const pokemon of resp) {
			const valPoke = pokemon?.url?.split("/")?.[6];
			PokemonsRequest()
				.getPokemonById(valPoke)
				.then((pokeDetails: any) => {
					// console.log(pokeDetails);
					arrayPoke.push({
						id: pokeDetails?.id,
						name: pokeDetails?.name,
						type: pokeDetails?.types?.[0]?.type?.name,
						order: pokeDetails?.order,
						image:
							pokeDetails?.sprites?.other?.["official-artwork"]?.front_default,
					});
					// console.log(arrayPoke);
				})
				.catch((e) => console.log(e));
		}

		setListOfPokemonsById([...arrayPoke]);
	};

	console.log(listOfPokemonsById);

	return (
		<SafeAreaView>
			<Text>Holis</Text>
			<Text>PokedexScreen</Text>
			{listOfPokemons.data?.results?.map((poke: any, index: number) => (
				<Text key={index}>{poke.name}</Text>
			))}
		</SafeAreaView>
	);
}
