import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { defaultStyle, colors } from '../styles/styles';
import Header from '../components/Header';
import { Avatar, Button } from "react-native-paper";
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

const categories = [{ category: "Nice", _id: "asdfasdf" },
  { category: "Nice2", _id: "asdssdfcasdfassdfasdf" },
  { category: "Nice3", _id: "sdfasdfasfas" },
  { category: "Nice4", _id: "sxczxczxczc" },
  { category: "Nice5", _id: "asdfaqqweqwsdf" }
  ];

const products =[
  {
  price: 9999999,
  stock: 23,
  name: "Gerard",
  _id: "asdfasdasdfsa",
  images: [{
    url:"https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.15752-9/426156173_308329602232698_3534526598458257776_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF_xcK6M3OwRlyAOD3bbViu8pK-IATGxs3ykr4gBMbGzUHuEz5ZmqrL262sGjngZftfioMD6-5HhG-CBX0hl-65&_nc_ohc=gVzKYfcLxdgAX8RWtVU&_nc_ht=scontent.fcrk1-2.fna&oh=03_AdQe61gr7qf8QXQZcjGUQtFnIV9i55PC0zHwjk-We-d2gw&oe=65FEB87E",
  }],
  },
  {
    price: 9999999,
    stock: 23,
    name: "Mark",
    _id: "sdgsdgsdasd",
    images: [{
      url:"https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/423454352_3310668132564914_5757140789262203791_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEoJFlOQOjelSrlqSd4sy-ux8hBHRgD2y_HyEEdGAPbL-E-MeJ7qV9lH0TtMoqzlHMvrmCl4mJAP47zO8WTErdu&_nc_ohc=g5Bwlm2cp5oAX8jKKoZ&_nc_ht=scontent.fmnl17-3.fna&oh=03_AdTgvnpft9rzcYlBcjpxxq3QYZbkJfD70w_V5hMRAqto-A&oe=65FEBF49"    }],
  }

];

const Home = () => {

const [category,setCategory] = useState("");
const [activeSearch, setActiveSearch] = useState(false);
const [searchQuery, setSearchQuery] = useState("");

const navigate = useNavigation();

const categoryButtonHandler = (id) => {
  setCategory(id);
};

const addToCartHandler = (id) => {
  console.log("Add to Cart", id);
};



console.log(category);
  return (
    <>
    {
      activeSearch && (
        <SearchModal 
      searchQuery={searchQuery} 
      setSearchQuery={setSearchQuery}
      setActiveSearch={setActiveSearch}
      products = {products}
    />
    )}
    <View style={defaultStyle}>
      <Header />

      {/* Heading Row */}

      <View style={{
        paddingTop: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        {/* Heading */}
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>

        {/* SearchBar */}
        <View>
          <TouchableOpacity onPress ={() => setActiveSearch((prev) => !prev)}>
            <Avatar.Icon
              icon={"magnify"}
              size={50}
              color= "gray"
              style={{ backgroundColor: colors.color2, elevation: 12 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View style={
        {
          flexDirection: "row",
          height: 80,
        }
      }>

        <ScrollView horizontal 
        contentContainerStyle = {{
          alignItems: "center",
        }}
        showsHorizontalScrollIndicator= {false}> 
          {
            categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor: category===item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={()=>categoryButtonHandler(item._id)}
              >
                <Text style={{
                  fontSize: 12,
                  color: category===item._id ? colors.color2 : "gray",
                }}>
                  {item.category}
                </Text>
              </Button>
            ))
          }
        </ScrollView>
      </View>
    {/* products */}

          <View style = {{ flex: 1 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                products.map((item,index)=>(
                  <ProductCard
                    stock={item.stock}
                    name={item.name}
                    price={item.price}
                    image={item.images[0]?.url}
                    addToCartHandler={addToCartHandler}
                    id={item._id}
                    key={item.id}
                    i={index}
                    navigate= {navigate}
                  />
                ) )
              }
            </ScrollView>
          </View>

    </View>
  </>
  );
};

export default Home;