import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

//Local Image
const icon = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar style='auto'/>
       {/* Image from the network; */}
        <Image source={{uri: 'https://www.google.com/imgres?q=movies%20caratulas%20en%20ingles&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D5241068029321596&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D5241068029321596%26id%3D887208618040914%26set%3Da.887220101373099&docid=agssFYNBnpBazM&tbnid=GJj8K1q3_N5D2M&vet=12ahUKEwjK187t_LeNAxXJPUQIHVn8ILMQM3oECFUQAA..i&w=2048&h=1375&hcb=2&ved=2ahUKEwjK187t_LeNAxXJPUQIHVn8ILMQM3oECFUQAA'}}
         style={{width: 215, height: 294}} />
      
      <Text style={{color: 'white'}}> Your Movies Database! </Text>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f4952',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
