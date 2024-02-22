import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { defaultStyle, colors } from '../styles/styles';
import Header from '../components/Header';
import { Avatar, Button } from "react-native-paper";
import SearchModal from '../components/SearchModal';

const categories = [{ category: "Nice", _id: "asdfasdf" },
  { category: "Nice2", _id: "asdssdfcasdfassdfasdf" },
  { category: "Nice3", _id: "sdfasdfasfas" },
  { category: "Nice4", _id: "sxczxczxczc" },
  { category: "Nice5", _id: "asdfaqqweqwsdf" }
  ];

const products =[{
  price: 9999999,
  name: "Gerard",
  _id: "asdfasdfsa",
  images: [{
    url:"https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.15752-9/426156173_308329602232698_3534526598458257776_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF_xcK6M3OwRlyAOD3bbViu8pK-IATGxs3ykr4gBMbGzUHuEz5ZmqrL262sGjngZftfioMD6-5HhG-CBX0hl-65&_nc_ohc=gVzKYfcLxdgAX8RWtVU&_nc_ht=scontent.fcrk1-2.fna&oh=03_AdQe61gr7qf8QXQZcjGUQtFnIV9i55PC0zHwjk-We-d2gw&oe=65FEB87E",
  }],
}];

const Home = () => {

const [category,setCategory] = useState("");
const [activeSearch, setActiveSearch] = useState(false);
const [searchQuery, setSearchQuery] = useState("");

const categoryButtonHandler = (id) => {
  setCategory(id);
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


    </View>
  </>
  );
};

export default Home;