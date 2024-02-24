import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { cartItems } from './Cart'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'

const ConfirmOrder = () => {

    const navigate = useNavigation()
    const itemsPrice = 4000;
    const shippingChargers = 200;
    const tax = 0.18 * itemsPrice;
    const totalAmount = itemsPrice + shippingChargers + tax;

    return (
        <View style={defaultStyle}>
            <Header back={true} />
            <Heading containerStyle={{
                paddingTop: 70,
            }}
                text1="Confirm" text2="Order"
            />

            <View style={{
                paddingVertical: 20,
                flex: 1,
            }}>
                <ScrollView>
                    {
                        cartItems.map(item => (
                            <ConfirmOrderItem
                                key={item.productL}
                                image={item.image}
                                price={item.price}
                                name={item.name}
                                quantity={item.quantity}
                            />
                        ))
                    }
                </ScrollView>
            </View>

            <PriceTag heading="Subtotal" value={itemsPrice} />
            <PriceTag heading="Shipping" value={shippingChargers} />
            <PriceTag heading="Tax" value={tax} />
            <PriceTag heading="Total" value={totalAmount} />

            <TouchableOpacity onPress={()=>navigate("payment",{
                itemsPrice,
                shippingChargers,
                tax,
                totalAmount, 
            })}>

                <Button style={{
                    backgroundColor: colors.color3,
                    boderRaduis: 100,
                    padding: 5,
                    margin: 10,
                }}
                
                textColor={colors.color2}
                icon={"chevron-right"}

                >Payment</Button>
            </TouchableOpacity>
        </View>
    );
    
}

const PriceTag = ({ heading, value }) => (
    <View style={{
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
    }}>
        <Text style={{ fontWeight: "800" }}>{heading}</Text>
        <Text>${value}</Text>
    </View>
);

export default ConfirmOrder
