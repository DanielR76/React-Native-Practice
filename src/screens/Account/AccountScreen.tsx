import { SafeAreaView } from "react-native";

import { UserData, Loginform } from "./components";
import { useAuth } from "../../hooks";

export function AccountScreen() {
	const {
		authState: { username },
	} = useAuth();

	return <SafeAreaView>{username ? <UserData /> : <Loginform />}</SafeAreaView>;
}

export default AccountScreen;
