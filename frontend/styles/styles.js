import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
  color1: "#248232",
  color1_light: "rgba(40, 149, 62,1)",
  color1_light2: "rgba(43, 168, 74,0.8)",
  color2: "#FCFFFC",
  color3: "rgb(45,45,45)",
  color4: "transparent",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
};

export const defaultStyle = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.color2,
});

export const inputStyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  marginVertical: 10,
  marginHorizontal: 20,
});

export const formHeading = StyleSheet.create({
  fontSize: 25,
  fontWeight: "500",
  textAlign: "center",
  backgroundColor: colors.color2,
  color: colors.color3,
  padding: 1,
  borderRadius: 5,
});

export const inputOptions = {
  style: inputStyling,
  mode: "outlined",
  activeOutlineColor: colors.color1,
};

export const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },
  forget: {
    color: colors.color2,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: "flex-end",
    fontWeight: "100",
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
  },
  or: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "100",
    color: colors.color2,
  },
  link: {
    color: colors.color2,
    alignSelf: "center",
    fontSize: 18,
    textTransform: "uppercase",
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export const defaultImg =
  "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
