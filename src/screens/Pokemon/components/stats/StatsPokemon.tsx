import { memo, FC } from "react";
import {
	BarStyled,
	BgBarStyled,
	BlockInfoStyled,
	BlockStyled,
	BlockTitleStyled,
	ContentStyled,
	NumberStyled,
	StatNameStyled,
	TitleStyled,
} from "./StatsPokemon.styled";

interface Props {
	stats: any;
}

export const StatsPokemon: FC<Props> = ({ stats = [] }) => {
	const barStyles = (number: number) =>
		number < 26
			? "#ff3e3e"
			: number > 25 && number < 51
			? "#F08700"
			: number > 50 && number < 76
			? "#EFCA08"
			: "#6EEB83";

	return (
		<ContentStyled>
			<TitleStyled>Base Stats</TitleStyled>
			{stats.map((item, index) => (
				<BlockStyled key={index}>
					<BlockTitleStyled>
						<StatNameStyled>{item?.stat?.name}</StatNameStyled>
					</BlockTitleStyled>
					<BlockInfoStyled>
						<NumberStyled>{item?.base_stat}</NumberStyled>
						<BgBarStyled>
							<BarStyled
								bg={barStyles(item?.base_stat)}
								width={item?.base_stat}
							/>
						</BgBarStyled>
					</BlockInfoStyled>
				</BlockStyled>
			))}
		</ContentStyled>
	);
};

export default memo(StatsPokemon);
