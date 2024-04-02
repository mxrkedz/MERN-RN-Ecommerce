// Home.js

import React, { useEffect, useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  Platform,
  FlatList,
} from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import Carousel from "react-native-snap-carousel";

import { defaultStyle, colors } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import SearchModal from "../components/SearchModal";

import { getAllProducts } from "../redux/actions/productAction";
import { useSetCategories } from "../utils/hooks";

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const isCarousel = useRef(null);

  const { products } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id, name, price, image, stock) => {
    if (!user) {
      navigate.navigate("login");
      return;
    }
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: 1,
      },
    });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
  };

  useSetCategories(setCategories, isFocused);

  useEffect(() => {
    if (categories.length > 0) {
      setCategory(categories[0]._id); // Set the first category as the initial selected category
    }
  }, [categories]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(getAllProducts(searchQuery, category));
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, searchQuery, category, isFocused]);

  const renderCarouselItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => categoryButtonHandler(item._id)}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Image
        source={{ uri: item.images[0].url }}
        style={{ width: 300, height: 200, borderRadius: 10 }}
      />
      <Text style={{ marginTop: 10, fontWeight: 900 }}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        alignSelf: "stretch",
        paddingTop: Platform.OS === "android" ? -10 : 0,
        flex: 1,
      }}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {activeSearch && (
            <SearchModal
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setActiveSearch={setActiveSearch}
              products={products}
            />
          )}
          <View style={defaultStyle}>
            <Header
              showCartButton={false}
              showSearchButton={true}
              onSearchButtonPress={() => setActiveSearch((prev) => !prev)}
            />

            {/* Heading Row */}
            <View style={styles.headingContainer}>
              <Heading text1="Find Your" text2="Needs" />
            </View>

            {/* Carousel */}
            <View style={styles.carouselContainer}>
              <Carousel
                data={categories}
                renderItem={renderCarouselItem}
                sliderWidth={Dimensions.get("window").width}
                itemWidth={300}
                ref={isCarousel}
                layout="default"
                loop
              />
            </View>

            {/* Subheading Row */}
            <View style={styles.subheadingContainer}>
              <Heading text1="Our" text2="Collection" />
            </View>

            {/* Products */}
            <View style={styles.productContainer}>
              {products.length > 0 ? (
                <FlatList
                  data={products}
                  renderItem={({ item }) => (
                    <ProductCard
                      stock={item.stock}
                      name={item.name}
                      price={item.price}
                      image={item.images[0]?.url}
                      addToCartHandler={addToCartHandler}
                      id={item._id}
                      key={item._id}
                      navigate={navigate}
                    />
                  )}
                  keyExtractor={(item) => item._id}
                  numColumns={2} // Display two products per row
                  contentContainerStyle={styles.scrollViewContent}
                />
              ) : (
                <Text>No available products yet for the category</Text>
              )}
            </View>
          </View>
        </ScrollView>
        <Footer activeRoute={"home"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  container: {
    flex: 1,
    position: "relative",
  },
  headingContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "left",
  },
  carouselContainer: {
    alignItems: "center", // Center the carousel horizontally
    marginBottom: 20, // Add margin bottom to give space between carousel and other content
  },
  subheadingContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    height: 80,
  },
  productContainer: {
    flex: 1,
    marginLeft:-10
  },
});

export default Home;
