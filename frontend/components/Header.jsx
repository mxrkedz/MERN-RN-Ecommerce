import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles"
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const Header = ({ back, showCartButton = true }) => {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    const emptyCartHandler = () => {
        dispatch({
            type: "clearCart",
        });
    };

    return (
        <>
            {back && (
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        left: 20,
                        top: 40,
                        zIndex: 10,
                    }}
                    onPress={() => navigate.goBack()}
                >
                    <Avatar.Icon
                        style={{
                            backgroundColor: colors.color4,
                        }}
                        icon={"arrow-left"}
                        color={route.name === "productdetails" ? colors.color2 : colors.color3}
                    />
                </TouchableOpacity>
            )}

            {showCartButton && (
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        right: 20,
                        top: 40,
                        zIndex: 10,
                    }}
                    onPress={emptyCartHandler}
                >
                    <Avatar.Icon
                        style={{
                            backgroundColor: colors.color4,
                        }}
                        icon="cart-outline"
                        color={route.name === "productdetails" ? colors.color2 : colors.color3}
                    />
                </TouchableOpacity>
            )}
        </>
    )
}

export default Header;
