import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "Macbook",
    image:
      "https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/423454352_3310668132564914_5757140789262203791_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEoJFlOQOjelSrlqSd4sy-ux8hBHRgD2y_HyEEdGAPbL-E-MeJ7qV9lH0TtMoqzlHMvrmCl4mJAP47zO8WTErdu&_nc_ohc=g5Bwlm2cp5oAX8jKKoZ&_nc_ht=scontent.fmnl17-3.fna&oh=03_AdTgvnpft9rzcYlBcjpxxq3QYZbkJfD70w_V5hMRAqto-A&oe=65FEBF49",
    productL: "asdasdwqdafqg",
    stock: 3,
    price: "$9999",
    quantity: 2,
  },
  {
    name: "Brand New Shesh",
    image:
      "https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.15752-9/426156173_308329602232698_3534526598458257776_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF_xcK6M3OwRlyAOD3bbViu8pK-IATGxs3ykr4gBMbGzUHuEz5ZmqrL262sGjngZftfioMD6-5HhG-CBX0hl-65&_nc_ohc=gVzKYfcLxdgAX8RWtVU&_nc_ht=scontent.fcrk1-2.fna&oh=03_AdQe61gr7qf8QXQZcjGUQtFnIV9i55PC0zHwjk-We-d2gw&oe=65FEB87E",
    productL: "asdasdasad",
    stock: 3,
    price: "$10000",
    quantity: 5,
  },
  {
    name: "Brand New Shesh",
    image:
      "https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.15752-9/426156173_308329602232698_3534526598458257776_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF_xcK6M3OwRlyAOD3bbViu8pK-IATGxs3ykr4gBMbGzUHuEz5ZmqrL262sGjngZftfioMD6-5HhG-CBX0hl-65&_nc_ohc=gVzKYfcLxdgAX8RWtVU&_nc_ht=scontent.fcrk1-2.fna&oh=03_AdQe61gr7qf8QXQZcjGUQtFnIV9i55PC0zHwjk-We-d2gw&oe=65FEB87E",
    productL: "asdasdaasdasdassad",
    stock: 3,
    price: "$10000",
    quantity: 5,
  },
  {
    name: "Brand New Shesh",
    image:
      "https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.15752-9/426156173_308329602232698_3534526598458257776_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF_xcK6M3OwRlyAOD3bbViu8pK-IATGxs3ykr4gBMbGzUHuEz5ZmqrL262sGjngZftfioMD6-5HhG-CBX0hl-65&_nc_ohc=gVzKYfcLxdgAX8RWtVU&_nc_ht=scontent.fcrk1-2.fna&oh=03_AdQe61gr7qf8QXQZcjGUQtFnIV9i55PC0zHwjk-We-d2gw&oe=65FEB87E",
    productL: "aaaaaasdasdasad",
    stock: 3,
    price: "$10000",
    quantity: 5,
  },
  {
    name: "Brand New Shesh",
    image:
      "https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/423454352_3310668132564914_5757140789262203791_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEoJFlOQOjelSrlqSd4sy-ux8hBHRgD2y_HyEEdGAPbL-E-MeJ7qV9lH0TtMoqzlHMvrmCl4mJAP47zO8WTErdu&_nc_ohc=g5Bwlm2cp5oAX8jKKoZ&_nc_ht=scontent.fmnl17-3.fna&oh=03_AdTgvnpft9rzcYlBcjpxxq3QYZbkJfD70w_V5hMRAqto-A&oe=65FEBF49",
    productL: "asaaaaaaadasdasad",
    stock: 3,
    price: "$10000",
    quantity: 5,
  },
  {
    name: "Brand New Shesh",
    image:
      "https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/404977719_3240266302785070_6296636051138423641_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHdPNdi5tVaCyPDwZb3Aw9bT_knaufeBghP-Sdq594GCAS5QeWrhsGHX4SlTMjyOaOlil0wjEXUpbb4FsWfi464&_nc_ohc=2-zmxu2Jpb8AX_AhdQy&_nc_ht=scontent.fmnl30-2.fna&oh=03_AdQY6UZT_Wywy0TdBZ6qTfAP8FrJusGSWmIOQXot_S6Ljg&oe=6601A935",
    productL: "asdaasdasdasdasdassdasad",
    stock: 3,
    price: "$10000",
    quantity: 5,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = (id, qty, stock) => {
    console.log("Increasing", id, qty, stock);
  };
  const decrementHandler = (id, qty) => {
    console.log("Decreasing", id, qty);
  };

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      <Header back={true} emptyCart={true} />
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
            navigate={navigate}
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>5 Items</Text>
      </View>

      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRaduis: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
