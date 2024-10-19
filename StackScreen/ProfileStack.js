import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert, ScrollView, SectionList } from 'react-native';
import React, { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function ProfileStack() {
  const [isheight, setIsHeight] = useState("");
  const [isWeight, setIsWeight] = useState("");
  const [gender, setGender] = useState(null);
  const [lastName, setLastName] = useState("");
  const navigation = useNavigation();

  const data = [
    { label: 'Male', value: '1' },
    { label: 'Female', value: '2' },
    { label: 'Custom', value: '3' },
    { label: 'Not Sure', value: '4' },
  ];
  
  function handleRegister(){
    navigation.navigate("ProfileStack")
  }
  
  function handleLogin(){
    navigation.navigate("Login")
  }

  return (
    <KeyboardAvoidingView style={styles.generalContainer}>
      <StatusBar />
      <View style={styles.generalContainer2}>
        <View style={styles.Header}>
          <Text style={styles.HeaderTitle1}>Hey there,</Text>
          <Text style={styles.HeaderTitle2}>Let's complete your profile</Text>
        </View>
        <View style={styles.inputContainer}>
          <Dropdown
            style={styles.input} 
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select gender"
            searchPlaceholder="Search..."
            value={gender}
            onChange={item => {
              setGender(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
          />

          <TextInput
            placeholder="Hegiht"
            style={styles.input}
            value={isheight}
            onChangeText={e => setIsHeight(e)}
        
          />

          <TextInput
            placeholder="Weight"
            style={styles.input}
            value={isWeight}
            onChangeText={e => setIsWeight(e)}
          />

          {/* <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={e => setPassword(e)}
            secureTextEntry={true}
          /> */}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Next <MaterialIcons name="navigate-next" size={15} color="#fff" /></Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  generalContainer2: {
    top: 30,
    marginTop: 40,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "#f2f2f2", 
    borderWidth: 1,
    borderColor: 'gray',  
  },
  buttonContainer: {
    flex: 0.9,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#9999ff",
    paddingVertical: 15,
    width: 300,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  Header: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderTitle1: {
    fontWeight: "400",
    fontSize: 15,
    marginBottom: 5,
  },
  HeaderTitle2: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 25,
  },
  iconTrigger: {
    marginHorizontal: 15,
  },
  dropdown: {
    width: 300,
    height: 50,
    backgroundColor: "#f2f2f2", 
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
