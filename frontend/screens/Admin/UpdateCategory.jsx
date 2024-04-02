import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCategory,
  getCategoryDetails,
} from "../../redux/actions/otherAction";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from "../../styles/styles";

const UpdateCategory = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [id] = useState(route.params.id);
  const [loading, setLoading] = useState(false);
  const [category, setCategoryName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await dispatch(getCategoryDetails(id));
      } catch (error) {
        console.error("Error fetching category details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, id, isFocused]);

  const { category: categoryDetails } = useSelector((state) => state.other);

  const submitHandler = () => {
    dispatch(updateCategory(id, category));
  };

  useEffect(() => {
    if (categoryDetails) {
      setCategoryName(categoryDetails.category);
    }
  }, [categoryDetails]);

  const handleCategoryChange = (newCategory) => {
    setCategoryName(newCategory);
  };

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color2,
        }}
      >
        <Header back={true} showCartButton={false} />

        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Update Category</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <View
            style={{
                flex: 1,
                padding: 20,
                backgroundColor: colors.color2,
                borderRadius: 10,
            }}
          >
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <TextInput
                {...inputOptions}
                placeholder="Name"
                value={category}
                onChangeText={handleCategoryChange}
              />
              <Button
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
                onPress={submitHandler}
                loading={loading}
                disabled={loading}
              >
                Update
              </Button>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default UpdateCategory;
