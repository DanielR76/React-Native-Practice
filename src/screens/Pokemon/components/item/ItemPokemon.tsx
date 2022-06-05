import { memo, FC } from "react";
import { Text } from "react-native";
import { getColorPokemon } from "../../../../utilities";

import { ContentStyled, PillStyled } from "./ItemPokemon.styled";

interface Props {
	types: any[];
}

export const ItemPokemon: FC<Props> = ({ types }) => {
	return (
		<ContentStyled>
			{types.map((element: any, index: number) => (
				<PillStyled key={index} bg={getColorPokemon(element?.type?.name)}>
					<Text>{element?.type?.name}</Text>
				</PillStyled>
			))}
		</ContentStyled>
	);
};

export default memo(ItemPokemon);
