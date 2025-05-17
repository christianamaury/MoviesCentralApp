import { StatusBar } from 'expo-status-bar';
//If Added to the import below the TouchableHighlight I can modify the buttons;
//SafeareaView only works in iOS lol. 
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView} from 'react-native';
//Adding useSrare,useEffect for rendering purposes
import {useState, useEffect} from "react"
//Importing the API call; 
import {getLatestGames} from './lib/metacritic';
//Constants its like SafeAreaView, but for Android and iOS
import Constants from "expo-constants";
//Not using the Constants, replacing it with the following library; 
//I can use a hook to get the information through any of my components with: useSafeAreaInsets; 
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Main} from './components/Main';

//Local Image
const icon = require('./assets/icon.png');

export default function App() {

  return (
    <SafeAreaProvider>
        <View styles={styles.container}>
        {/*Adding Safearea Component*/}
         {/* <SafeAreaView style={styles.safeArea}>  */}
         {/* Calling Main Component which has the logic*/}
         <Main/>
         {/* </SafeAreaView> */}
      </View>
    </SafeAreaProvider>
 

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#3f4952',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight, 
    paddingHorizontal: 12,
  },
 
});
