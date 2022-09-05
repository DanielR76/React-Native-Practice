import { useRequest } from "../hooks/useRequest";

const PokemonsRequest = () => {
	const getService = useRequest();

	const getPokemons = (offset: number, limit: number = 20): Promise<any> => {
		return getService(`pokemon?limit=${limit}&offset=${limit * offset}`);
	};

	const getPokemonById = (number: number): Promise<any> => {
		return getService(`pokemon/${number}/`);
	};

	return {
		getPokemons,
		getPokemonById,
	};
};

export default PokemonsRequest;
