import { View, Text, Button } from "react-native";
import { useAuth } from "@hooks";
import { memo } from "react";

import { ContainerStyled } from "./UserData.styled";

export const UserData = () => {
	const { authState, resetUserDispatch } = useAuth();
	const { email, firstname, lastname, username } = authState;

	return (
		<ContainerStyled>
			<View>
				<Text>Nombre</Text>
				<Text>{firstname + " " + lastname}</Text>
			</View>
			<View>
				<Text>Usuario</Text>
				<Text>{username}</Text>
			</View>
			<View>
				<Text>Correo</Text>
				<Text>{email}</Text>
			</View>
			<View>
				<Text>Total Favoritos</Text>
				<Text>0</Text>
			</View>
			<Button title="Cerrar sesion" onPress={resetUserDispatch} />
		</ContainerStyled>
	);
};

export default memo(UserData);
