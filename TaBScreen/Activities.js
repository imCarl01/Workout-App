import { ActivityIndicator, StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import { fetchExecerise } from '../Service/excerisedbAPI'


export default function Activities() {
  const [execerise, setExcerise] = useState([])
  const [isLoading, setIsLoading] =useState(true);

  useEffect(()=>{
    const getExercises = async()=>{
      try {
        const data = await fetchExecerise();
        setExcerise(data.slice(0,10))
      } catch (error) {
        console.log("Not fetching any exerice")
      }finally{
        setIsLoading(false)
      }
    }
 
    getExercises()
  },[])
  if(isLoading){
    return <ActivityIndicator size="large" color="blue"/>
  }

  const renderExcerise= ({item})=>{
    return(
      <View style={styles.itemContainer}>
      <Image source={{ uri: item.gifUrl }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.bodyPart}>Body Part: {item.bodyPart}</Text>
        <Text style={styles.target}>Target: {item.target}</Text>
      </View>
    )

  }
  return (
    <View>
      <FlatList
      data={execerise}
      renderItem={renderExcerise}
      KeyExtractor={(item)=>item.id}


      />
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bodyPart: {
    fontSize: 16,
  },
  target: {
    fontSize: 16,
  },
});
