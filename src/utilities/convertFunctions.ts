import { ColorsPokemon } from "./consts";

export const getColorPokemon = (type: ColorsPokeType) =>
	ColorsPokemon[type] || "#FFF";
