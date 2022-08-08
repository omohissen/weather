import { View, Text, ImageBackground, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import one from'../../assets/1.jpg'

const Home = () => {
  return (
    <ImageBackground source={one} style={styles.imge}>
        <SafeAreaView style={{flex: 1}}>
      <View style={styles.textinputcontaner}>
       <TextInput 
       style = {styles.textinput}
       value = {"city"}
       placeholder = "chose your city"
       />
      </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Home


const styles = StyleSheet.create({
    imge: {
      flex: 1,
    },
    textinputcontaner: {
        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        paddingVertical: 5,
        width:'100%',
        backgroundColor: 'dodgerblue',
        position: 'a'
        
       

    },
    textinput: {


    },
  });