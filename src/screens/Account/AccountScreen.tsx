import { SafeAreaView, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { UserData, Loginform } from "./components";
import { ScreenNames } from "../../utilities/consts";

export function AccountScreen() {
	const navigation = useNavigation<NativeStackNavigationProp<any>>();
	const goToSettingScreen = (): void =>
		navigation.navigate(ScreenNames.Favorite);

	const user = null;

	return (
		<SafeAreaView>
			{user ? <UserData /> : <Loginform />}

			{/* <Button onPress={goToSettingScreen} title="Go to Favorites" /> */}
		</SafeAreaView>
	);
}

export default AccountScreen;
