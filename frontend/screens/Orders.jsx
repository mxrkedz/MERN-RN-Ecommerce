import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";

const orders = [
  {
    _id: "sdasdasdasdad",
    shippingInfo: {
      address: "1234 street",
      city: "taguig",
      country: "pilipins",
      pincode: "1400",
    },
    createdAt: "02-25-2024T2324",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 20000,
  },
  {
    _id: "werfwsujik",
    shippingInfo: {
      address: "1234 street",
      city: "3331taguig",
      country: "pilipins",
      pincode: "1400",
    },
    createdAt: "02-25-2024T2324",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 20000,
  },
  {
    _id: "yjtyjredged",
    shippingInfo: {
      address: "1234 street",
      city: "112taguig",
      country: "pilipins",
      pincode: "1400",
    },
    createdAt: "02-25-2024T2324",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 121212,
  },
];
const Orders = () => {
  const loading = false;

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? null : (
              <Headline style={{ textAlign: "center" }}>
                No Orders Yet!
              </Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
