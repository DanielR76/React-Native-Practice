import styled from "styled-components/native";

export const ContainerStyled = styled.SafeAreaView`
	flex-direction: column;
	justify-content: center;
	padding: 30px 15px;
`;

export const ContentIconStyled = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-bottom: 15px;
`;

export const TittleContStyled = styled.View`
	margin: 0 0 0 15px;
	padding: 10px;
`;

export const WelcomeTxtStyled = styled.Text`
	font-size: 25px;
	font-weight: 600;
	color: #1c2e38;
`;

export const UserInfoStyled = styled.View`
	flex-direction: row;
	width: 100%;
	max-width: 800px;
	padding: 10px;
	border-bottom-color: #32515f;
	border-bottom-width: 0.5px;
`;

export const InfoKeyStyled = styled.Text`
	width: 30%;
	font-weight: 600;
	font-size: 18px;
`;

export const InfoValueStyled = styled(InfoKeyStyled)`
	width: 70%;
	font-weight: 400;
	color: #686363;
`;

export const ContBtnStyled = styled(ContentIconStyled)`
	margin-top: 25px;
`;
