import React from "react";
import { Text, View } from "react-native";

import tw from "twrnc";

import { TextStyled, ViewStyled } from "../styles/Login.styled";

export default function Login() {
	return (
		<ViewStyled>
			<TextStyled>Holi</TextStyled>
			<Text style={tw`text-blue-500`}>Chaooo</Text>
		</ViewStyled>
	);
}
