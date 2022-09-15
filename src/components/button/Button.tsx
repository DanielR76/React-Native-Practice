import { FC, memo } from "react";
import { ButtonStyled, TextBtnStyled } from "./Button.styled";

type Props = {
	text?: string;
	onPress: () => void;
};

export const Button: FC<Props> = ({ text = "Accept", onPress }) => {
	return (
		<ButtonStyled onPress={onPress} activeOpacity={0.5}>
			<TextBtnStyled>{text}</TextBtnStyled>
		</ButtonStyled>
	);
};

export default memo(Button);
