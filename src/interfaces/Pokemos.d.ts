type PokeData = {
	id: string;
	name: string;
	type: ColorsPokeType;
	order: string;
	image: string;
};

type ColorsPokeType =
	| "normal"
	| "fighting"
	| "flying"
	| "poison"
	| "ground"
	| "rock"
	| "bug"
	| "ghost"
	| "steel"
	| "fire"
	| "water"
	| "grass"
	| "electric"
	| "psychic"
	| "ice"
	| "dragon"
	| "dark"
	| "fairy";
