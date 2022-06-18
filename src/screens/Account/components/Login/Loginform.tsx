import { memo, FC } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { TitleStyled, UserInputStyled, ButtonStyled } from "./Loginform.styled";

export const Loginform: FC = () => {
	const initialValues = {
		user: "",
		pass: "",
	};
	const validationYup = {
		user: Yup.string().required("El usuario es requerido"),
		pass: Yup.string().required("La constraseña es requerida"),
	};
	const formik = useFormik({
		initialValues,
		validationSchema: Yup.object(validationYup),
		validateOnChange: false,
		onSubmit: () => console.log("clicked here"),
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
			<ButtonStyled title="Aceptar" onPress={formik.handleSubmit} />
		</View>
	);
};

export default memo(Loginform);
