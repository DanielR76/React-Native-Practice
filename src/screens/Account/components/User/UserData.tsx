import { memo, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";

import { Button } from "@components";
import { useAuth } from "@hooks";
import {
	ContainerStyled,
	InfoKeyStyled,
	InfoValueStyled,
	TittleContStyled,
	UserInfoStyled,
	WelcomeTxtStyled,
} from "./UserData.styled";
import { getPokemonStorage } from "@utilities";

export const UserData = () => {
	const { authState, resetUserDispatch } = useAuth();
	const { email, firstname, lastname, username } = authState;

	const [quantityFav, setQuantityFav] = useState(0);

	useFocusEffect(
		useCallback(() => {
			(async () => {
				try {
					const pokemons = await getPokemonStorage();
					setQuantityFav(pokemons.length);
				} catch (e) {
					setQuantityFav(0);
				}
			})();
		}, [])
	);

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
				<InfoValueStyled>{quantityFav}</InfoValueStyled>
			</UserInfoStyled>

			<Button text="Logout" onPress={resetUserDispatch} />
		</ContainerStyled>
	);
};

export default memo(UserData);
