import { memo, FC } from "react";
import { View, Text, TextInput, Button } from "react-native";

import { TitleStyled, UserInputStyled, ButtonStyled } from "./Loginform.styled";

export const Loginform: FC = () => {
	return (
		<View>
			<TitleStyled>Iniciar sesión</TitleStyled>
			<UserInputStyled placeholder="Usuario" autoCapitalize="none" />
			<UserInputStyled
				placeholder="Contraseña"
				autoCapitalize="none"
				secureTextEntry={true}
			/>
			<ButtonStyled title="Aceptar" onPress={() => console.log("first")} />
		</View>
	);
};

export default memo(Loginform);
