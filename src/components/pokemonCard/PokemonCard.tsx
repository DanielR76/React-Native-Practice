import { memo, FC } from "react";
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
import { getColorPokemon, ScreenNames } from "@utilities";

type Props = {
	pokemon: PokeData;
};

export const PokemonCard: FC<Props> = ({ pokemon }) => {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();

	const goToSettingScreen = (): void =>
		navigation.navigate(ScreenNames.Pokemon, {
			id: pokemon?.id,
		});

	const handlePress = () => {
		goToSettingScreen();
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<CardStyled>
				<SpacingStyled bg={getColorPokemon(pokemon?.type)}>
					<NumberStyled>{`# ${pokemon?.order}`}</NumberStyled>
					<NameStyled>{pokemon?.name}</NameStyled>
					<ImageStyled source={{ uri: pokemon?.image }}></ImageStyled>
				</SpacingStyled>
			</CardStyled>
		</TouchableWithoutFeedback>
	);
};

export default memo(PokemonCard);
