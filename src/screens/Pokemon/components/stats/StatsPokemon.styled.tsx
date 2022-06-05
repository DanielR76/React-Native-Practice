import styled from "styled-components/native";

export const ContentStyled = styled.View`
	padding: 0px 20px;
	margin: 20px 0 60px 0;
`;

export const TitleStyled = styled.Text`
	font-weight: bold;
	font-size: 20px;
	padding-bottom: 5px;
`;

export const BlockStyled = styled.View`
	flex-direction: row;
	padding: 5px 0px;
`;

export const BlockTitleStyled = styled.View`
	width: 30%;
`;

export const StatNameStyled = styled.Text`
	font-size: 14px;
	color: #6b6b6b;
`;

export const BlockInfoStyled = styled.View`
	width: 70%;
	flex-direction: row;
	align-items: center;
`;

export const NumberStyled = styled.Text`
	width: 12%;
	font-size: 14px;
`;

export const BgBarStyled = styled.View`
	background-color: #dedede;
	width: 88%;
	height: 10px;
	border-radius: 20px;
	overflow: hidden;
`;

export const BarStyled = styled.View`
	height: 10px;
	border-radius: 20px;
	background-color: ${({ bg }) => bg};
	width: ${({ width }) => `${width} %`};
`;
