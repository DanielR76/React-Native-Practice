import { useRequest } from "../hooks/useRequest";

const PokemonsRequest = () => {
	const getService = useRequest();

	const getPokemons = (limit: number) => {
		return getService(`/pokemon?limit=${limit}&offset=200`);
	};

	const getPokemonById = (number: number) => {
		return getService(`/pokemon/${number}/`);
	};

	return {
		getPokemons,
		getPokemonById,
	};
};

export default PokemonsRequest;
