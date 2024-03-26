import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
/*import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";*/
import { useEffect, useState } from "react";
//import { onGoogleButtonPress } from '../services/AuthGoogle';

/*GoogleSignin.configure({
  webClientId:
    '1018191521816-4q2730r9ssca4b5cq68omsu3uq7qns27.apps.googleusercontent.com',
});*/

export default function Login() {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();
  /*useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "996243161224-u2m70isnnh2r1os4lsiipvqkja3t5uqf.apps.googleusercontent.com",
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setUserInfo(user);
      setError();
    } catch (e) {
      setError(e);
    }
  };

  const logout = async () => {
    setUserInfo();
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  };*/
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bg.png")}
          style={styles.imgBG}
          resizeMode="cover"
        >
          <Image
            source={require("../../assets/uesb-logo.png")}
            style={styles.imgLogo}
          />
          <View style={styles.boxTitle}>
            <Text style={styles.title}>UESB</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              try {
                navigation.navigate("App");
                //signIn();
              } catch (e) {
                console.log(e);
              }
            }}
          >
            <Image
              source={require("../../assets/img-login-google.png")}
              style={styles.imgLogin}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imgBG: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  boxTitle: {
    marginBottom: 350,
  },

  title: {
    fontSize: 65,
    fontWeight: "bold",
    textAlign: "center",
    color: "#B3074F",
  },

  imgLogin: {
    width: 250, // Definindo a largura da imagem
    height: 110, // Definindo a altura da imagem
    resizeMode: "contain",
    marginTop: -250,
  },

  imgLogo: {
    width: 220,
    height: 210,
    resizeMode: "center",
  },
});
