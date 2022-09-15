import { memo, FC, useState } from "react";
import { Text, ScrollView, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useFormik } from "formik";
import * as Yup from "yup";

import { userCredentials, userDetail } from "@utilities";
import { useAuth } from "@hooks";
import {
	ContBtnStyled,
	ContentIconStyled,
	ContentStyled,
	ErrorTextStyled,
	TitleStyled,
	UserInputStyled,
} from "./Loginform.styled";
import { Button } from "@components";

const initialValues: UserDataType = {
	user: "",
	pass: "",
};

export const Loginform: FC = () => {
	const { setUserDispatch } = useAuth();

	const [error, setError] = useState(false);

	const validationSchema = Yup.object({
		user: Yup.string().required("User is required"),
		pass: Yup.string().required("Password is required"),
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		validateOnChange: false,
		onSubmit: ({ pass, user }) => {
			if (pass === userCredentials.pass && user === userCredentials.user)
				setUserDispatch(userDetail);
			else setError(true);
		},
	});

	const handleChange = (type: "user" | "pass", text: string) => {
		formik.setFieldValue(type, text);
		error && setError(false);
	};

	return (
		<SafeAreaView>
			<ScrollView>
				<ContentStyled>
					<ContentIconStyled>
						<Icon name="user-circle" color="#f66" size={50} />
						<TitleStyled>Log in</TitleStyled>
					</ContentIconStyled>

					<UserInputStyled
						placeholder="Usuario"
						autoCapitalize="none"
						value={formik.values.user}
						onChangeText={(text) => handleChange("user", text)}
					/>
					<ErrorTextStyled>{formik.errors.user}</ErrorTextStyled>

					<UserInputStyled
						placeholder="Contraseña"
						autoCapitalize="none"
						secureTextEntry={true}
						value={formik.values.pass}
						onChangeText={(text) => handleChange("pass", text)}
					/>
					<ErrorTextStyled>{formik.errors.pass}</ErrorTextStyled>

					<ContBtnStyled>
						<Button onPress={formik.handleSubmit} />
						{error && (
							<ErrorTextStyled>User or password are wrong</ErrorTextStyled>
						)}
					</ContBtnStyled>
				</ContentStyled>
			</ScrollView>
		</SafeAreaView>
	);
};

export default memo(Loginform);
