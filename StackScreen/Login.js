import { StyleSheet, Text, View,KeyboardAvoidingView,TextInput,TouchableOpacity, Alert,SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import FontAwesome from '@expo/vector-icons/FontAwesome';



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();


  function handleRegiter(){
    navigation.navigate("Register")
  }
  function handleLogin(){
    navigation.navigate("HomeT")
  
  }
  return (
<KeyboardAvoidingView style={styles.generalContainer}>
  <StatusBar/>
      <View style={styles.generalContainer2}>
            <View style={styles.Header}>
                <Text style={styles.HeaderTitle1}>Hey there,</Text>
                <Text style={styles.HeaderTitle2}>Welcome Back</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Email Address' 
                    style={styles.input}
                    value={{}}
                    onChangeText={e=>setEmail(e)}
                    keyboardType='email-address'
                    autoCapitalize='none'
                />


                <TextInput 
                    placeholder='Password' 
                    style={styles.input}
                    value={{}}
                    onChangeText={e=>setPassword(e)}
                    secureTextEntry={true}
                />
                
            </View>
        <TouchableOpacity >
          <Text  >Forgot your password?</Text>
         
        </TouchableOpacity>
      </View>
     
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>handleLogin()}>
          <Text style={styles.buttonText}><Entypo name="login" size={15} color="#fff" /> Login</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.socialLogin} >
        <Text>
          ________________  or  ________________
        </Text>
        <View style={styles.socialLoginIcons}>
            <TouchableOpacity style={styles.iconTrigger} >
            <FontAwesome name="facebook-square" size={50} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconTrigger}>
            <FontAwesome name="linkedin-square" size={50} color="#0077B5" />
            </TouchableOpacity>
        </View>

      </View>

      <View style={styles.dontHaveAccount} >
        <Text>Don't have an account yet? <Text style={{color:"#9999ff", fontWeight:"bold"}} onPress={handleRegiter}>Register</Text></Text>          
        <TouchableOpacity>
            
          </TouchableOpacity>
      </View>
   
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    generalContainer:{
        flex:1,
        backgroundColor:"#fff"

    },
    generalContainer2:{
      top:30,
      marginTop:40,
      justifyContent:"flex-start",
      alignItems:"center",
    },
    input:{
        width:300,
        height:50,
        marginBottom:10,
        borderRadius:10,
        paddingLeft:10,
        backgroundColor:"#f2f2f2"
    },
    buttonContainer: {
        flex:0.9,
        justifyContent:"flex-end",
        alignItems: 'center', 
        marginBottom:10,
      },
      button: {
        backgroundColor: '#9999ff',
        paddingVertical: 15,
        width:300,
        height:60,
        // width: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
      },
    Header:{
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",

    },
    HeaderTitle1:{
        fontWeight:"400",
        fontSize: 15,
        marginBottom:5,
    },
    HeaderTitle2:{
      fontWeight:"bold",
      fontSize: 20,
      marginBottom:25,
  },
  socialLogin:{
    justifyContent:"center",
    alignItems:"center",
    

  },
  socialLoginIcons:{
    marginTop:15,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    
  },
  iconTrigger:{
    marginHorizontal:15,
  },
  dontHaveAccount:{
    justifyContent:"center",
    alignItems:"center",
    top:5,
    marginTop:15,
  }
})