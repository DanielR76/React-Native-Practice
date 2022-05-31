import styled from "styled-components/native";

export const CardStyled = styled.View`
	flex: 1;
	height: 130px;
`;

export const SpacingStyled = styled.View`
	flex: 1;
	margin: 5px;
	background-color: ${({ bg }) => bg};
	border-radius: 5px;
`;

export const NameStyled = styled.Text`
	position: absolute;
	bottom: 5px;
	left: 5px;
	font-size: 16px;
	color: #fff;
`;

export const NumberStyled = styled.Text`
	position: absolute;
	top: 5px;
	left: 5px;
	font-size: 16px;
	color: #fccccc;
`;

export const ImageStyled = styled.Image`
	position: absolute;
	bottom: 5px;
	right: 5px;
	width: 90px;
	height: 90px;
`;
