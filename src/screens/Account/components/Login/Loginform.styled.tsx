import styled from "styled-components/native";

export const ContentStyled = styled.View`
	flex-direction: column;
	justify-content: center;
	padding: 30px 15px;
`;

export const ContentIconStyled = styled.View`
	flex-direction: column;
	align-items: center;
`;

export const TitleStyled = styled.Text`
	margin-bottom: 25px;
	text-align: center;
	font-size: 28px;
	font-weight: bold;
	color: #474747;
`;

export const UserInputStyled = styled.TextInput`
	height: 40px;
	padding: 10px;
	border-width: 1px;
	border-radius: 5px;
	border-color: #b3b3cc;
`;

export const ErrorTextStyled = styled.Text`
	margin: 5px 0px;
	color: #f00b0b;
`;

export const ContBtnStyled = styled(ContentIconStyled)`
	margin-top: 25px;
`;
