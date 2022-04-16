import { FlatList } from "react-native";
import styled from "styled-components/native";

export const FlatListStyled = styled(FlatList as new () => FlatList<PokeData>)`
	padding: 0 5px;
`;
