import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ButtonBox from '../../components/ButtonBox'
import { products } from '../Home'
import ProductListItem from '../../components/ProductListItem'
import Chart from '../../components/Chart'

const AdminDashboard = ({navigation}) => {
  const loading = false;

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


  const deleteProductHandler = (id) =>{
    console.log('Deleting Product with ID: ${id}')
  }

  return (
    <View style={defaultStyle}>

      <Header back={true} />

      <View style={{ paddingTop: 70, marginBottom: 20 }}>
        <Text style={formHeading}>Admin Dashboard</Text>
      </View>

      {
        loading ? (<Loader />) : 
        (<>
        <View style = {{
          backgroundColor: colors.color3,
          borderRadius: 20,
          alignItems: "center",
        }}>

        <Chart inStock={12} outOfStock={2} />

        </View>

        

        <View>
          <View style={{ 
            flexDirection: "row", 
            margin: 10, 
            justifyContent: "space-between"}}>
              <ButtonBox icon={"plus"} 
              text={"Product"} 
              handler={navigationHandler}/>

              <ButtonBox icon={"format-list-bulleted-square"} 
              text={"All Orders"} 
              handler={navigationHandler}
              reverse= {true}/>

              <ButtonBox icon={"plus"} 
              text={"Category"} 
              handler={navigationHandler}/>
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
            {
              products.map((item,index) => (
              <ProductListItem 
              navigate= {navigation}
              deleteHandler = {deleteProductHandler}
              key ={item._id} 
              id = {item.id}
              i = {index}
              price = {item.price} 
              stock = {item.stock} 
              name = {item.name} 
              category = {item.category}
              imgSrc = {item.images[0].url}/>))
            }

        </View>

      </ScrollView>

          </>)}
  

    </View>
  )
}

export default AdminDashboard