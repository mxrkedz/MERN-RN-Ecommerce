import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Button } from 'react-native-paper'

const ProductCard = ({
    stock,
     name, 
     price, 
     image, 
     id, 
     addToCartHandler, 
     i,
     navigate,
}) => {
  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress = {() =>navigate.navigate("productdetails",{id})}>
        <View style = {{
            elevation: 15,
            width: 250,
            alignItems: "center",
            justifyContent: "space-between",
            margin: 20,
            borderRadius: 20,
            height: 400,
            backgroundColor: colors.color2,
        }}>
            <Image source = {{
                uri: image,
            }}
            style = {{
                width: 200,
                height: "100%",
                resizeMode: "contain",
                position: "absolute",
                left: 25,
                top:0,
            }}
            />

            <View style ={{
                flexDirection: "row",
                padding: 20,
                justifyContent: "space-between",
                width: "100%",
            }}>
                {/* Price */}
                <Text numberOfLines={2} style = {{
                     color: colors.color3,
                     fontSize: 25,
                     fontWeight: 300,
                     width: "60%"
                }}>{name}
                </Text>

                <Text numberOfLines={2} style = {{
                     color: colors.color3,
                     fontSize: 25,
                     fontWeight: 700,
                }}>₱{price}
                </Text>
            </View>

            {stock > 0 ? (
                <TouchableOpacity 
                    style = {{
                        backgroundColor: colors.color3,
                        borderRadius: 0,
                        paddingVertical: 10,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        width: "100%"
                    }}
                    onPress={()=>addToCartHandler(id, name, price, image, stock)}
                >
                    <Button textColor={colors.color2}>Add To Cart</Button>
                </TouchableOpacity>
            ) : (
                <View 
                    style={{
                        backgroundColor: colors.color3,
                        borderRadius: 0,
                        paddingVertical: 10,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        width: "100%",
                        opacity: 0.5, // Making the button appear disabled
                    }}
                >
                    <Button disabled textColor={colors.color2}>Out Of Stock</Button>
                </View>
            )}


        </View>
    </TouchableOpacity>
  )
}

export default ProductCard