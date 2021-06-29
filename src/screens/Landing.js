import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import * as colors from '../../constants/color'



const Landing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          {`Get Direct \nAccess to Solar \nLeads Today`}
        </Text>
      </View>

     

      <View style={styles.containerSecond}>
        <Text style={styles.dollar}>$97</Text>
        <Text style={styles.subtitle}>
            {`Only to \nget start \na month`}
        </Text>
      </View>


      <View style={styles.containerThree}>
        <Text style={styles.heading3}>
          {`We handle the marketing\nYou handle the leads`}
        </Text>
      </View>


      <View style={styles.containerFour}>
            <TouchableOpacity style={styles.registerBtn}>
                <Text style = {styles.registerFont}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}> 
                <Text style = {styles.loginFont}>Login</Text> 
            </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 0,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 35,
    // backgroundColor: 'grey'
  },
  heading: {
    fontSize: 33,
    fontFamily: "Oswald",
    fontWeight: '300',
    lineHeight: 35,
    color: colors.PRIMARY_RED,
    paddingTop: 5
  },
  headingContainer: {
    
    width: "100%",
    height: "25%",
    justifyContent: 'center',
    // backgroundColor: 'green'


  },

  containerSecond: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: 'white'

  },
  heading2: {
    fontSize: 15,
  },
  dollar: {
    fontSize: 80,
    fontFamily: "poppins",
    fontWeight: "bold",
    color: colors.PRIMARY_RED,
    // top: -20

  },
  subtitle: {
    fontSize: 20,
    fontFamily: "poppins",
    fontWeight: "bold",
    marginHorizontal: 15,
    color: colors.PRIMARY_RED,
  },
  containerThree: {
    width: "100%",
    height: "20%",
    // backgroundColor:'violet'
  },
  heading3: {
    fontFamily: 'Poppins',
    fontWeight: "500",
    lineHeight: 28,
    fontSize: 20,
    top: 20

  },
  containerFour: {
    flex: 0,
    top: 10,
    justifyContent: 'center',
    // backgroundColor: 'green',

  },

  registerBtn: {
    backgroundColor: colors.PRIMARY_RED,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "20%",
    
  },
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "20%",
    borderColor: colors.PRIMARY_RED,
    borderWidth: 2,
    color: colors.PRIMARY_RED,
    marginVertical: 20
  },

  loginFont: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 15,
    color: colors.BLACK,
    textTransform: 'uppercase'
  },

  registerFont: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 15,
    color: colors.WHITE,
    textTransform: 'uppercase'
  }

});

export default Landing;
