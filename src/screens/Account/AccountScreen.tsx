import { SafeAreaView } from "react-native";

import { UserData, Loginform } from "./components";
import { useAuth } from "../../hooks";

export function AccountScreen() {
	const { userAuth } = useAuth();

	return (
		<SafeAreaView>
			{userAuth.username ? <UserData /> : <Loginform />}
		</SafeAreaView>
	);
}

export default AccountScreen;
