import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,Alert } from 'react-native';

export default class Screen2 extends React.Component {
  
sendLikeAlert()
{    Alert.alert(
        'Lets Nurture',
        'Thank You for liking our quote, See You soon :)',
        [
          {text: 'Cancel', onPress: () => console.log('Rishu'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('Rishu')},
        ],
        { cancelable: false }
      )
    }

    sendDisLikeAlert()
{    Alert.alert(
        'Lets Nurture',
        'We will try to improve our quote, See You soon :)',
        [
          {text: 'Cancel', onPress: () => console.log('Rishav Kumar'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('Rishav Kumar')},
        ],
        { cancelable: false }
      )
    }

  render() {
    return (
        
        <View style={styles.container}>
        <Image
          style={{width: 100, height: 100,alignSelf:'center',marginBottom: 30,marginTop: 16,borderRadius:8}}
          source={require('../Images/ic_LetsNurtureImage.jpeg')}
        />

<View style = {styles.NameContainer}>

        <Text style = {styles.NameText}>
Name:
</Text> 

<TextInput 
        style = {styles.TextInput}
        //editable = {true}
        maxLength = {40}
        placeholder = "Enter your name"
        placeholderTextColor = 'black'
        underlineColorAndroid = 'transparent'
      />
</View>

        
    <View style = {styles.quoteContainer}>

    <Text style = {styles.quoteText}>
    "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination."

    </Text>
    </View>

<View style={styles.ButtonViewContainer}>
     <TouchableOpacity style = {styles.buttonContainer}>

<Text style = {styles.buttonText}
onPress = {this.sendLikeAlert}>
Liked IT
</Text> 
</TouchableOpacity>

<TouchableOpacity style = {styles.buttonContainer}
onPress = {this.sendDisLikeAlert}>

<Text style = {styles.RightbuttonText}>
DisLiked It
</Text> 
</TouchableOpacity>

</View>
<Image
          style={{width: 60, height: 60,alignSelf:'center',marginTop: 12}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
<View style={styles.copyRightContainer}>

<Text style={styles.copyRightContainerText}>
Copyright Reserved ©
</Text>
     </View> 
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 20,
    backgroundColor: 'black',
     justifyContent: 'center',
    // alignItems: 'center',
  },
  NameContainer:
  {
    marginBottom: 12,
    height: 30,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  quoteContainer:
  {
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },

  quoteText:
  {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    color: 'yellow',
  },

  copyRightContainer:
   {
     alignContent: 'flex-end',
     height: 20,
     alignSelf: 'center',
    alignItems:  'flex-end',
    position: 'absolute', 
     bottom: 0
   },

  copyRightContainerText:
  {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
 
  },
  ButtonViewContainer:
  {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    justifyContent: 'space-between',
  },

  buttonContainer:
  {
    height: 30,
    opacity: 0.9,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignContent: 'space-between',
    borderRadius: 7
  },
  buttonText:
  {
      color: 'green',
      fontSize: 15,
      textAlign: 'center',
      marginLeft: 16,
      marginRight: 16,
      fontWeight: 'bold',

  },
  TextInput:
  {
    borderWidth: 2,
     borderColor: 'white',
     color: 'black',
     fontWeight: 'bold',
    backgroundColor:  'white',
    height: 25,
    width: '75%',
    marginLeft: 12,
    paddingLeft: 8
  },
  RightbuttonText:
  {
      color: 'red',
      fontSize: 15,
      textAlign: 'center',
      marginLeft: 16,
      marginRight: 16,
      fontWeight: 'bold',
      
  },
  NameText:
  {
textAlign: 'center',
color: 'white',
fontSize: 14,
fontWeight: 'bold',

  },

  });
