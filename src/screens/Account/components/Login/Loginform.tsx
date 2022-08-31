import { memo, FC } from "react";
import { View, Text } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { userCredentials, userDetail } from "../../../../utilities";
import { useAuth } from "../../../../hooks";
import { TitleStyled, UserInputStyled, ButtonStyled } from "./Loginform.styled";

const initialValues: UserDataType = {
	user: "",
	pass: "",
};

export const Loginform: FC = () => {
	const { setUser } = useAuth();

	const validationSchema = Yup.object({
		user: Yup.string().required("El usuario es requerido"),
		pass: Yup.string().required("La constraseña es requerida"),
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		validateOnChange: false,
		onSubmit: ({ pass, user }) => {
			if (pass === userCredentials.pass && user === userCredentials.user)
				setUser(userDetail);
		},
	});

	return (
		<View>
			<TitleStyled>Iniciar sesión</TitleStyled>
			<UserInputStyled
				placeholder="Usuario"
				autoCapitalize="none"
				value={formik.values.user}
				onChangeText={(text) => formik.setFieldValue("user", text)}
			/>
			<Text>{formik.errors.user}</Text>
			<UserInputStyled
				placeholder="Contraseña"
				autoCapitalize="none"
				secureTextEntry={true}
				value={formik.values.pass}
				onChangeText={(text) => formik.setFieldValue("pass", text)}
			/>
			<Text>{formik.errors.pass}</Text>
			<ButtonStyled title="Aceptar" onPress={() => formik.handleSubmit()} />
		</View>
	);
};

export default memo(Loginform);
