import { StatusBar } from 'expo-status-bar';
//If Added to the import below the TouchableHighlight I can modify the buttons;
//SafeareaView only works in iOS lol. 
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';
//Adding useSrare,useEffect for rendering purposes
import {useState, useEffect} from "react"
//Importing the API call; 
import {getLatestGames} from '../lib/metacritic';
//Constants its like SafeAreaView, but for Android and iOS
import Constants from "expo-constants";
//I can use a hook to get the information through any of my components with: useSafeAreaInsets; 
import {useSafeAreaInsets} from 'react-native-safe-area-context'; 
//Calling GameCard Component; 
import {GameCard} from "./GameCard";

//Local Image
const icon = require('./assets/icon.png');

export function Main () {

  //An empty array on the 1st first call;
  //Every the variable changes value, the component will get rendered. 
  const [games, setGames] = useState([]);
  const insents = useSafeAreaInsets();

  //It will get executed the 1st time that it gets rendered. 
  useEffect (() => {
    //When we actually have the results; 
    getLatestGames().then((games) => {
      //Calling our setGames useState;
      setGames(games); 
    });

  }, []);

  return (
 
    //Passing information as a hook through the View 
    <View style={{paddingTop: insents.top, paddingBottom: insents.bottom}}>
      {/*Adding Safearea Component*/}
     
          {/* This statusBar is a Component that's not from React Native.  */}
          {/* <StatusBar style='light'/> */}

          {/* Mapping Games Variable*/}
          {/* A loading indicator will show up in the Top */}
          {games.length === 0 ? (
        
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
             <ActivityIndicator color={"#fff"}/>
          </View>
            
          ) :  (

            <ScrollView>
                { games.map((game) => (
                    <GameCard key={game.slug} game={game}/>
                ))}
            </ScrollView>
          
          )}

            {/* Image from the network; */}
            {/* <Image source={{uri: 'https://www.google.com/imgres?q=movies%20caratulas%20en%20ingles&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D5241068029321596&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D5241068029321596%26id%3D887208618040914%26set%3Da.887220101373099&docid=agssFYNBnpBazM&tbnid=GJj8K1q3_N5D2M&vet=12ahUKEwjK187t_LeNAxXJPUQIHVn8ILMQM3oECFUQAA..i&w=2048&h=1375&hcb=2&ved=2ahUKEwjK187t_LeNAxXJPUQIHVn8ILMQM3oECFUQAA'}}
              style={{width: 215, height: 294}} /> */}
            {/* <Text style={{color: 'white'}}> Your Movies Hub Spot! </Text> */}

            {/* Adding a button */}
            {/* <Button title='Start Now' onPress={() => {alert('Welcome!')}}/> */}

            {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#3f4952',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight, 
//     padding: 12, 
//   },

  safeArea: {
      margin: 13, 
  
  },

  title: {
    fontSize: 20, 
    fontWeight:"bold",
    marginBottom: 10,
    color: "#0fff", 
  },

  description: {
    fontSize: 20, 
    fontWeight: "bold",
    marginBottom: 10, 
    color: "#0fff",

  },

  score: {
      fontSize: 25, 
      fontWeight: "bold",
      marginBottom: 10, 
      color: "green"
  },

  card: {
      marginBottom: 10,
  },

//Elements settings for the Image;
  image: {
      width: 107, 
      height: 147, 
      borderRadius: 10, 
  }
 
});
