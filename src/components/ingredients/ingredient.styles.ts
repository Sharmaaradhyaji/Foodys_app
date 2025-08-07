import { StyleSheet } from "react-native";
import { theme } from "../../globals/constants/constants";
import { hp, wp } from "../../globals/globals";

export const ingredientStyles = StyleSheet.create({
    container: {
        backgroundColor: theme.themePrimaryOrange,
        margin: hp(1),
        borderRadius: 30,
        height: hp(5),
        paddingLeft: wp(4),
        paddingRight: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 9,
    },
    text: {
        fontSize: hp(2),
        color: theme.cardColor,
        alignSelf: 'center'
    }
}) 