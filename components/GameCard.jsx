import {View, StyleSheet, Text, Image} from "react-native";


export function GameCard ({game}){

    return (
        <View key={game.slug} style={styles.card}>
            <Image source={{uri: game.image}} style={styles.image}>

            <Text style={styles.title}>
                {/* Game Variable Title: */}
                {game.title}
            </Text>

            <Text style={styles.description}>
            {/* Game Description Variable: */}
            {game.description}
            </Text>

            <Text style={styles.score}>
                {/* Game Score Variable: */}
                {game.score}
            </Text>

            </Image>
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
    