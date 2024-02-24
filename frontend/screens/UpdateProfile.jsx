import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  defaultStyle,
  colors,
  formHeading,
  inputOptions,
  defaultImg,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";

const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const loading = false;

  const disableBtn =
    !name || !email || !address || !city || !country || !pinCode;
  const submitHandler = () => {
    alert("Yeah");
  };
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Edit Profile</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: 20,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <View>
          <TextInput
            {...inputOptions}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            {...inputOptions}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            {...inputOptions}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            {...inputOptions}
            placeholder="Country"
            value={country}
            onChangeText={setCountry}
          />
          <TextInput
            {...inputOptions}
            placeholder="Pin Code"
            value={pinCode}
            onChangeText={setPinCode}
          />

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={disableBtn}
            style={styles.btn}
            onPress={submitHandler}
          >
            Update
          </Button>
          <Text style={styles.or}></Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;
