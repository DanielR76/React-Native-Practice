import { memo } from "react";
import { ContentStyled, TextStyled } from "./NotList.styled";

export const NotList = () => {
	return (
		<ContentStyled>
			<TextStyled>No data</TextStyled>
		</ContentStyled>
	);
};

export default memo(NotList);
