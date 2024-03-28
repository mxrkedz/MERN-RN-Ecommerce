import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ButtonBox from '../../components/ButtonBox'
import ProductListItem from '../../components/ProductListItem'
import Chart from '../../components/Chart'
import { useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { useAdminProducts, useMessageAndErrorOther, useGetSalesData, useGetGeographicSalesData } from '../../utils/hooks'
import { deleteProduct } from '../../redux/actions/otherAction'
import { getAdminProducts } from '../../redux/actions/productAction'
import SalesChart from '../../components/SalesChart'
import GeographicSalesChart from '../../components/GeographicSalesChart';

const AdminDashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { loading, products, inStock, outOfStock } = useAdminProducts(
    dispatch,
    isFocused
  );

// Fetch sales data
const [salesData, setSalesData] = useState([]);
useGetSalesData(setSalesData); // Fetch sales data when component mounts

// Fetch sales data
const [salesByCity, setGeographicSalesData] = useState([]);
useGetGeographicSalesData(setGeographicSalesData); // Fetch sales data when component mounts

  const navigationHandler = (text) => {
    switch (text) {
      case "Category":
        navigation.navigate("categories");
        break;
      case "All Orders":
        navigation.navigate("adminorders");
        break;
      case "Product":
        navigation.navigate("newproduct");
        break;

      default:
        navigation.navigate("adminorders");
        break;
    }
  };


  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const loadingDelete = useMessageAndErrorOther(
    dispatch,
    null,
    null,
    getAdminProducts
  );

  return (
    <View style={{ flex: 1 }}>
      <Header back={true} showCartButton={false} />
      {loading ? (<Loader />) : (
        <ScrollView style={defaultStyle}>
          <View style={{ paddingTop: 70, marginBottom: 20 }}>
            <Text style={formHeading}>Dashboard</Text>
          </View>

          <View style={{
            backgroundColor: colors.color3,
            borderRadius: 20,
            alignItems: "center",
          }}>
            <Chart inStock={inStock} outOfStock={outOfStock} />
          </View>

          <View style={{
            backgroundColor: colors.color3,
            marginTop: 10,
            borderRadius: 20,
            padding: 10,
            alignItems: "center",
          }}>
            <SalesChart salesData={salesData} />
          </View>

          <View style={{
            backgroundColor: colors.color3,
            marginTop: 10,
            borderRadius: 20,
            padding: 10,
            alignItems: "center",
          }}>
            <GeographicSalesChart salesByCity={salesByCity} />
          </View>

          <View>
            <View style={{
              flexDirection: "row",
              margin: 10,
              justifyContent: "space-between"
            }}>
              <ButtonBox icon={"plus"}
                text={"Product"}
                handler={navigationHandler} />

              <ButtonBox icon={"format-list-bulleted-square"}
                text={"All Orders"}
                handler={navigationHandler}
                reverse={true} />

              <ButtonBox icon={"plus"}
                text={"Category"}
                handler={navigationHandler} />
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>Image</Text>
            <Text style={styles.text}>Price</Text>
            <Text style={{ ...styles.text, width: null, maxWidth: 120 }}>Name</Text>
            <Text style={{ ...styles.text, width: 60 }}>Category</Text>
            <Text style={styles.text}>Stock</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {!loadingDelete &&
                products.map((item, index) => (
                  <ProductListItem
                    navigate={navigation}
                    deleteHandler={deleteProductHandler}
                    key={item._id}
                    id={item._id}
                    i={index}
                    price={item.price}
                    stock={item.stock}
                    name={item.name}
                    category={item.category?.category}
                    imgSrc={item.images[0].url} />))
              }
            </View>
          </ScrollView>
        </ScrollView>
      )}
    </View>
  )
}

export default AdminDashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
  },

  text: {
    width: 40,
    color: colors.color2,
    fontWeight: "900",
  },
});