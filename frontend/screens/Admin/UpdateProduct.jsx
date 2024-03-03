import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/styles";
import Loader from "../../components/Loader";
import { Button, TextInput } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";


const UpdateProduct = ({ navigation, route }) => {

  const loading = false;
  const loadingOther = false;

  const images = [
    {
      url: "https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/423454352_3310668132564914_5757140789262203791_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEoJFlOQOjelSrlqSd4sy-ux8hBHRgD2y_HyEEdGAPbL-E-MeJ7qV9lH0TtMoqzlHMvrmCl4mJAP47zO8WTErdu&_nc_ohc=g5Bwlm2cp5oAX8jKKoZ&_nc_ht=scontent.fmnl17-3.fna&oh=03_AdTgvnpft9rzcYlBcjpxxq3QYZbkJfD70w_V5hMRAqto-A&oe=65FEBF49",
      _id: "vasvawrfawf",
    },
    {
      url: "https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.15752-9/426156173_308329602232698_3534526598458257776_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF_xcK6M3OwRlyAOD3bbViu8pK-IATGxs3ykr4gBMbGzUHuEz5ZmqrL262sGjngZftfioMD6-5HhG-CBX0hl-65&_nc_ohc=gVzKYfcLxdgAX8RWtVU&_nc_ht=scontent.fcrk1-2.fna&oh=03_AdQe61gr7qf8QXQZcjGUQtFnIV9i55PC0zHwjk-We-d2gw&oe=65FEB87E",
      _id: "asvasedtwsqs",
    }
  ]

  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Laptop");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    {_id: "afasdfasd", category: "Laptop"},
    {_id: "asfsvxz", category: "Footwear"},
    {_id: "nrtidrfg", category: "Cloths"},
]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log(name, description, price, stock, categoryID);
  };

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color5,
        }}
      >
        <Header back={true} />

        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Update Product</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                height: 650,
              }}
            >
              <Button
                onPress={() =>
                  navigation.navigate("productimages", {
                    id,
                    images: images,
                  })
                }
                textColor={colors.color1}
              >
                Manage Images
              </Button>

              <TextInput
                {...inputOptions}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                {...inputOptions}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
              />

              <TextInput
                {...inputOptions}
                placeholder="Price"
                keyboardType="number-pad"
                value={price}
                onChangeText={setPrice}
              />
              <TextInput
                {...inputOptions}
                placeholder="Stock"
                value={stock}
                keyboardType="number-pad"
                onChangeText={setStock}
              />

              <Text
                style={{
                  ...inputStyling,
                  textAlign: "center",
                  textAlignVertical: "center",
                  borderRadius: 3,
                }}
                onPress={() => setVisible(true)}
              >
                {category}
              </Text>

              <Button
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
                onPress={submitHandler}
                loading={loadingOther}
                disabled={loadingOther}
              >
                Update
              </Button>
            </View>
          </ScrollView>
        )}
      </View>

      <SelectComponent
        categories={categories}
        setCategoryID={setCategoryID}
        setCategory={setCategory}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default UpdateProduct;