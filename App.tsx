import { NavigationContainer } from "@react-navigation/native";
import NativeStackNav from "./src/navigation/NativeStackNav";
import BottomTabNav from "./src/navigation/BottomTabNav";
import DrawerNav from "./src/navigation/DrawerNav";

export default function App() {
	return (
		<NavigationContainer>
			{/* <NativeStackNav /> */}
			{/* <BottomTabNav /> */}
			<DrawerNav />
		</NavigationContainer>
	);
}
