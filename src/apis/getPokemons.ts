import { useRequest } from "../hooks/useRequest";

const PokemonsRequest = () => {
	const getService = useRequest();

	const getPokemons = (limit: number) => {
		return getService(`/pokemon?limit=${limit}&offset=200`);
	};

	const getPokemonsById = (url: string) => {
		return fetch(url);
	};

	return {
		getPokemons,
		getPokemonsById,
	};
};

export default PokemonsRequest;
