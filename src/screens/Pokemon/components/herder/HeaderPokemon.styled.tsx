import styled from "styled-components/native";

interface BgStyledProps {
	bg: string;
}

export const BgStyled = styled.View<BgStyledProps>`
	position: absolute;
	width: 100%;
	height: 400px;
	border-bottom-left-radius: 300px;
	border-bottom-right-radius: 300px;
	background-color: ${({ bg }) => bg};
	transform: scaleX(2);
`;

export const ContentStyled = styled.SafeAreaView`
	margin: 30px 20px 0 20px;
`;

export const HeaderStyled = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-top: 40px;
`;

export const NameStyled = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 27px;
`;

export const OrderStyled = styled.Text`
	color: #fff;
	font-weight: bold;
`;

export const ContentImageStyled = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	top: 30px;
`;

export const ImageStyle = styled.Image`
	width: 250px;
	height: 300px;
`;
