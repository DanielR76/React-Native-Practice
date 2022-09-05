import { Button } from "react-native";
import { useAuth } from "@hooks";
import { memo } from "react";

import {
	ContainerStyled,
	InfoKeyStyled,
	InfoValueStyled,
	TittleContStyled,
	UserInfoStyled,
	WelcomeTxtStyled,
} from "./UserData.styled";

export const UserData = () => {
	const { authState, resetUserDispatch } = useAuth();
	const { email, firstname, lastname, username } = authState;

	return (
		<ContainerStyled>
			<TittleContStyled>
				<WelcomeTxtStyled>Bienvenido,</WelcomeTxtStyled>
				<WelcomeTxtStyled>{firstname}</WelcomeTxtStyled>
			</TittleContStyled>

			<UserInfoStyled>
				<InfoKeyStyled>Nombre:</InfoKeyStyled>
				<InfoValueStyled>{firstname + " " + lastname}</InfoValueStyled>
			</UserInfoStyled>

			<UserInfoStyled>
				<InfoKeyStyled>Usuario:</InfoKeyStyled>
				<InfoValueStyled>{username}</InfoValueStyled>
			</UserInfoStyled>

			<UserInfoStyled>
				<InfoKeyStyled>Correo:</InfoKeyStyled>
				<InfoValueStyled>{email}</InfoValueStyled>
			</UserInfoStyled>

			<UserInfoStyled>
				<InfoKeyStyled>Favoritos:</InfoKeyStyled>
				<InfoValueStyled>0</InfoValueStyled>
			</UserInfoStyled>

			<Button title="Cerrar sesion" onPress={resetUserDispatch} />
		</ContainerStyled>
	);
};

export default memo(UserData);
