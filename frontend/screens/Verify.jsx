import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  defaultStyle,
  colors,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useMessageAndErrorOther } from "../utils/hooks";
import { resetPassword } from "../redux/actions/otherAction";

const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useMessageAndErrorOther(dispatch, navigation, "login");

  const submitHandler = () => {
    dispatch(resetPassword(otp, password));
  };
  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Reset Password</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />
          <TextInput
            {...inputOptions}
            placeholder="New Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.forget}>Forget Password?</Text>
          </TouchableOpacity>
          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={otp === "" || password === ""}
            style={styles.btn}
            onPress={submitHandler}
          >
            Reset Password
          </Button>
          <Text style={styles.or}></Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Verify;
