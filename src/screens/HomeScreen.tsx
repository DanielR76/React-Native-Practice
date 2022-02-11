import { View, Text, Button } from "react-native";
import { screenNames } from "../utilities/consts";
import { navigationInterface } from "../interfaces/SettingInterface";

export default function HomeScreen({ navigation }: navigationInterface) {
	const goToSettingScreen = (): void =>
		navigation.navigate(screenNames.setting);

	return (
		<View>
			<Text>Home</Text>
			<Button onPress={goToSettingScreen} title="Go to settings" />
		</View>
	);
}
