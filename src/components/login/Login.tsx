import React from "react";
import { Text } from "react-native";

import tw from "twrnc";

import { TextStyled, ViewStyled } from "./Login.styled";

export function Login() {
	return (
		<ViewStyled>
			<TextStyled>Holi</TextStyled>
			<Text style={tw`text-blue-500`}>Chaooo</Text>
		</ViewStyled>
	);
}

export default Login;
