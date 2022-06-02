import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenNames } from "../../utilities/consts";

export function AccountScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const goToSettingScreen = (): void =>
		navigation.navigate(ScreenNames.Favorite);

	return (
		<View>
			<Text>Home</Text>

			<Button onPress={goToSettingScreen} title="Go to Favorites" />
		</View>
	);
}

export default AccountScreen;
