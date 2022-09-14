import AsyncStorage from "@react-native-async-storage/async-storage";
import { Storage } from "./consts";

export const getPokemonStorage = async () => {
	try {
		const jsonValue = await AsyncStorage.getItem(Storage.Favorites);
		return Array.isArray(jsonValue) || jsonValue !== null
			? JSON.parse(jsonValue)
			: [];
	} catch (e) {
		throw e;
	}
};

export const setPokemonStorage = async (val: number) => {
	try {
		const jsonValue = await getPokemonStorage();
		jsonValue.push(val);
		await AsyncStorage.setItem(Storage.Favorites, JSON.stringify(jsonValue));
	} catch (e) {
		throw e;
	}
};

export const removePokemonStorage = async (val: number) => {
	try {
		const jsonValue = await getPokemonStorage();
		const newVal = jsonValue.filter((rem) => rem !== val);
		await AsyncStorage.setItem(Storage.Favorites, JSON.stringify(newVal));
	} catch (e) {
		throw e;
	}
};

export const existPokemonStorage = async (val: number) => {
	try {
		const jsonValue = await getPokemonStorage();
		return jsonValue.includes(val);
	} catch (e) {
		throw e;
	}
};
