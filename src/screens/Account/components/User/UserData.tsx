import { memo, useState, useCallback } from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/core";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Button } from "@components";
import { useAuth } from "@hooks";
import {
	ContainerStyled,
	ContBtnStyled,
	ContentIconStyled,
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
		<SafeAreaView>
			<ScrollView>
				<ContainerStyled>
					<ContentIconStyled>
						<Icon name="user-check" color="#f66" size={50} />
						<TittleContStyled>
							<WelcomeTxtStyled>Welcome</WelcomeTxtStyled>
							<WelcomeTxtStyled>{firstname}</WelcomeTxtStyled>
						</TittleContStyled>
					</ContentIconStyled>

					<UserInfoStyled>
						<InfoKeyStyled>Name:</InfoKeyStyled>
						<InfoValueStyled>{firstname + " " + lastname}</InfoValueStyled>
					</UserInfoStyled>

					<UserInfoStyled>
						<InfoKeyStyled>User:</InfoKeyStyled>
						<InfoValueStyled>{username}</InfoValueStyled>
					</UserInfoStyled>

					<UserInfoStyled>
						<InfoKeyStyled>Email:</InfoKeyStyled>
						<InfoValueStyled>{email}</InfoValueStyled>
					</UserInfoStyled>

					<UserInfoStyled>
						<InfoKeyStyled>Favorites:</InfoKeyStyled>
						<InfoValueStyled>{quantityFav}</InfoValueStyled>
					</UserInfoStyled>

					<ContBtnStyled>
						<Button text="Logout" onPress={resetUserDispatch} />
					</ContBtnStyled>
				</ContainerStyled>
			</ScrollView>
		</SafeAreaView>
	);
};

export default memo(UserData);
