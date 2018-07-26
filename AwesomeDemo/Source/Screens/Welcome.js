import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

export default class Welcome extends React.Component {

  
    
//     goToNextScreen()
// {
//     this.props.navigation.navigate('Screen2',)
// }
//    goToNextScreen = goToNextScreen.bind(this);
  
  render() {
    // const  navigate = this.props.navigation;

    
    return (
        
        <View style={styles.container}>
        

        <View style={styles.Welcomecontainer}> 


        <Image
          style={{width: 120, height: 120,alignSelf:'center',
          shadowColor: 'red', shadowOffset: { width: 5, height: 8 }, shadowOpacity:0.5,
          marginBottom: 30,marginTop: 16,borderRadius:8}}
          source={require('../Images/ic_LetsNurtureImage.jpeg')}
        />


<Text style={styles.welcome}>
Hello! Have An Awesome day ahead!! We from


<Text style={{color:'red',fontSize: 20,fontWeight: 'bold'}}>
{" "}Lets Nurture 


<Text style={styles.welcome}>
{" "}really hope you are doing well :)
</Text>
</Text>
</Text>

<TouchableOpacity style = {styles.buttonContainer}
onPress={() => this.props.navigation.navigate("Screen2")}>

<Text style = {styles.buttonText}>
Next Page
</Text> 


</TouchableOpacity>


</View>
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
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      flexWrap: 'wrap',
  },
  
    Welcomecontainer:
    {
        marginLeft: 16,
        marginRight: 16,
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
  
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight:'bold',
      color:'white',
      opacity: 0.91
      },
  
    buttonContainer:
    {
      height: 35,
      width: '50%',
      alignSelf: 'center',
      opacity: 0.8,
      backgroundColor: '#1a1a1a',
      borderRadius: 8,
      marginTop: 50,
      justifyContent: 'center',
    },
  
    buttonText:
    {
  color:'white',
  fontSize: 18,
  textAlign: 'center',
  marginLeft: 8,
  marginRight: 8,
  opacity: 0.9
   },
  
   copyRightContainer:
   {
     alignContent: 'flex-end',
     height: 20,
    alignItems:  'flex-end',
    position: 'absolute', 
     bottom: 0
   },
  
   copyRightContainerText:
   {
     fontSize: 12,
     color: 'white',
     textAlign: 'center',
  
   }
  });
  
