import { memo, FC } from "react";
import { getColorPokemon } from "../../../utilities";

import {
	BgStyled,
	ContentStyled,
	HeaderStyled,
	NameStyled,
	OrderStyled,
	ContentImageStyled,
	ImageStyle,
} from "./HeaderPokemon.styled";

interface Props {
	name: string;
	order: string;
	image: string;
	type: ColorsPokeType;
}

export const HeaderPokemon: FC<Props> = ({ name, order, image, type }) => {
	return (
		<>
			<BgStyled bg={getColorPokemon(type) ?? "#fff"} />
			<ContentStyled>
				<HeaderStyled>
					<NameStyled>{name}</NameStyled>
					<OrderStyled>#{`${order}`.padStart(3, 0)}</OrderStyled>
				</HeaderStyled>
				<ContentImageStyled>
					<ImageStyle resizeMode="contain" source={{ uri: image }} />
				</ContentImageStyled>
			</ContentStyled>
		</>
	);
};

export default memo(HeaderPokemon);
