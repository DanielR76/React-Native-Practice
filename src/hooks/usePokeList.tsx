import { useState } from "react";
import PokemonsRequest from "../apis/getPokemons";

export const usePokeList = () => {
	const [listOfPokemonsById, setListOfPokemonsById] = useState<PokeData[] | []>(
		[]
	);

	const requestPokemonById = async (resp: number[]) => {
		const arrayPoke: PokeData[] = [];

		for await (const pokemon of resp) {
			await PokemonsRequest()
				.getPokemonById(pokemon)
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
	return { listOfPokemonsById, requestPokemonById };
};
