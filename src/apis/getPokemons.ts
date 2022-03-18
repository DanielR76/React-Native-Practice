import { useEffect, useState } from "react";
import { useRequest } from "../hooks/useRequest";

type InitData = {
	data: Array<any>;
	isLoading: boolean;
};

const initialData: InitData = {
	data: [],
	isLoading: true,
};

export const PokemonsRequest = () => {
	const getService = useRequest();

	const [listOfPokemons, setListOfPokemons] = useState(initialData);

	const getPokemons = () => {
		getService("/pokemon/ditto")
			.then((resp) =>
				setListOfPokemons({ ...listOfPokemons, data: resp, isLoading: false })
			)
			.catch(() => setListOfPokemons({ ...initialData, isLoading: false }));
	};

	return { getPokemons, listOfPokemons };
};
