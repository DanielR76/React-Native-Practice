import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenNames } from "../../utilities/consts";

export function FavoriteScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const goToHomeScreen = (): void => navigation.navigate(ScreenNames.Account);

	return (
		<View>
			<Text>Setting</Text>
			<Button onPress={() => goToHomeScreen()} title="Go to Account" />
		</View>
	);
}

export default FavoriteScreen;
