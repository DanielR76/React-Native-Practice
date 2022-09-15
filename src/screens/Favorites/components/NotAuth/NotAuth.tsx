import { memo } from "react";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome5";

import { ScreenNames } from "@utilities";
import { Button } from "@components";
import { ContentStyled, TextStyled } from "./NotAuth.styled";

export const NotAuth = () => {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const goToAuth = (): void => navigation.navigate(ScreenNames.Account);

	return (
		<ContentStyled>
			<Icon name="grin-beam-sweat" color="#f66" size={100} />
			<TextStyled>Ops.., you're not logged</TextStyled>
			<Button text="Press here to login" onPress={goToAuth} />
		</ContentStyled>
	);
};

export default memo(NotAuth);
