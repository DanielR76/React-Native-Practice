import styled from "styled-components/native";

interface PillStyledProps {
	bg: string;
}

export const ContentStyled = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;

export const PillStyled = styled.View<PillStyledProps>`
	margin: 0px 10px;
	padding: 5px 30px;
	border-radius: 15px;
	background-color: ${({ bg }) => bg};
`;
