import { memo } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
	CardStyled,
	SpacingStyled,
	NameStyled,
	NumberStyled,
	ImageStyled,
} from "./Card.styled";
import { getColorPokemon } from "../../utilities/convertFunctions";
import { ScreenNames } from "../../utilities/consts";

export const PokemonCard = ({ pokemon }: { pokemon: PokeData }) => {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();

	const goToSettingScreen = (): void =>
		navigation.navigate(ScreenNames.Pokemon);

	const handlePress = () => {
		console.log(pokemon.name);
		goToSettingScreen();
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<CardStyled>
				<SpacingStyled bg={getColorPokemon(pokemon.type)}>
					<NumberStyled>{`# ${pokemon.order}`}</NumberStyled>
					<NameStyled>{pokemon.name}</NameStyled>
					<ImageStyled source={{ uri: pokemon.image }}></ImageStyled>
				</SpacingStyled>
			</CardStyled>
		</TouchableWithoutFeedback>
	);
};

export default memo(PokemonCard);
