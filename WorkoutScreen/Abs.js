import { StyleSheet, Text, View, Image, StatusBar, FlatList, ActivityIndicator,Pressable,ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchExeceriseByTarget } from '../Service/excerisedbAPI';
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';

const target = "abs"

export default function Abs() {
  const [execerise, setExcerise] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setModalVisbile] = useState(false)
  const [selectedWokout, setSelectedWorkout] = useState(null)

  useEffect(()=>{
    const getExercisesBYTarget=async()=>{
      try {
        const data = await fetchExeceriseByTarget(target);
        setExcerise(data)
      } catch (error) {
        console.log("Not fetching by target fix me")
      }finally{
        setIsLoading(false)
      }

    }
    getExercisesBYTarget()
  },[])

  const openModal =(item)=>{
    setSelectedWorkout(item);
    setModalVisbile(true)
  }

  if(isLoading){
    return(
      <View style={styles.loading}>
      <ActivityIndicator size="large" color="#9999ff" />
      <Text>loading...</Text>
    </View>
    )

    
  }

  const renderItemByTarget=({item})=>{
    return(
      <Pressable onPress={()=>openModal(item)}>
            <View style={styles.itemContainer} key={item.id} >

            <TouchableOpacity onPress={()=>openModal(item)}>
            <Feather name="list" size={24} color="black" />
            </TouchableOpacity>

            <Image source={{ uri: item.gifUrl }} style={styles.image} />

            <View style={styles.infocontainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.bodyPart}>Body Part: {item.bodyPart}</Text>
            <Text style={styles.target}>Target: {item.target}</Text>
            </View>

            </View>
      </Pressable>

    )
  }
  return (
    <View style={styles.container}>
      
      <StatusBar backgroundColor={"#9999ff"}/>

      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisbile(!isModalVisible);
        }}>
        <ScrollView style={styles.centeredView} showsVerticalScrollIndicator={false}>
          <View style={styles.modalView}>
            {selectedWokout && (
              <>
                <Text style={styles.modalTitle}>{selectedWokout.name}</Text>
                <Image source={{ uri: selectedWokout.gifUrl }} style={styles.modalImage} />
                
                <Text style={styles.modalHeader}>Instruction:</Text>
                <Text style={styles.modalText}>{selectedWokout.instructions}</Text>
                <Text style={styles.modalHeader}>Secondary Muscles:</Text>
                <Text style={styles.modalText}> {selectedWokout.secondaryMuscles}</Text>
                <Text style={styles.modalHeader}>Equipment:</Text>
                <Text style={styles.modalText}> {selectedWokout.equipment}</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisbile(!isModalVisible)}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </>
            )}
          </View>
        </ScrollView>
      </Modal>
      <View style={styles.rowContainer}>

          
          <View style={styles.textContainer}>
          <Text style={styles.title}>Abs Workouts</Text>
        </View>
      
        <Image
          source={require('../TaBScreen/Image/muscular-guy-posing-studio-grey-background.png')} // Change this to the path of your image
          style={styles.heroImage}
        />
      </View>
      <FlatList
        data={execerise}
        renderItem={renderItemByTarget}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 20,
  },
  rowContainer: {
    marginTop:35,
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:"#9999ff",
  },
  heroImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1, // Take the remaining space in the row
  },
  title: {
    marginLeft:20,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffff',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginLeft:10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyPart: {
    fontSize: 16,
  },
  target: {
    fontSize: 16,
  },
  loading:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    
  },
  infocontainer:{
    padding:10,
    marginLeft:50,
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start"
  },
  centeredView: {
    flex: 1,
    
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    height:"100%",
    width:"100%",
    justifyContent: 'flex-start',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle:{
    marginTop:20,
    fontSize:20,
    fontWeight:"bold",
    marginLeft:20,
  },
  modalHeader:{
    marginTop:10,
    fontSize:20,
    fontWeight:"bold",
    marginLeft:10,
   
  },
  modalImage:{
    width:300,
    height:300,
    justifyContent:"center",
    alignSelf:"center",
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    padding:10,
    marginBottom: 15,
    textAlign: 'justify',
    letterSpacing:0.5,
  },

});
