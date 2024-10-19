import { StyleSheet, Text, TouchableOpacity, View, Image,ScrollView, Pressable } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Workout({navigation}) {

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Select Categories</Text>

      <View style={styles.categories} >
        {/* Category 1 */}
        <Pressable style={styles.category} onPress={()=>navigation.navigate("Abs")}>
          
          <Text style={styles.categoryText}>Abs</Text>
          <Image
            source={require('./Image/muscular-guy-posing-studio-grey-background.png')}
            style={styles.Image1}
          />
        </Pressable>

        {/* Category 2 */}
        <Pressable style={styles.category} onPress={()=>navigation.navigate("Chest")}>
          <Text style={styles.categoryText}>Chest</Text>
          <Image
            source={require('./Image/muscular-middle-age-man-posing-studio-isolated-grey.png')}
            style={styles.Image1}
          />
        </Pressable>

        {/* Category 3 */}
        <Pressable style={styles.category} onPress={()=>navigation.navigate("Arms")}>
          <Text style={styles.categoryText}>Arms</Text>
          <Image
            source={require('./Image/png-clipart-pair-of-black-fixed-weight-dumbbells-dietary-supplement-bodybuilding-supplement-physical-fitness-muscle-bodybuilding-hand-wrist-thumbnail-removebg-preview-removebg-preview.png')}
            style={styles.Image2}
          />
        </Pressable>

        {/* Category 4 */}
        <Pressable style={styles.category} onPress={()=>navigation.navigate("Legs")}>
          <Text style={styles.categoryText}>Legs</Text>
          <Image
            source={require('./Image/30-Minute-Leg-Workout-750x536-removebg-preview.png')}
            style={styles.Image3}
          />
        </Pressable>

        {/* Category 5 */}
        <Pressable style={styles.category} onPress={()=>navigation.navigate("Back")}>
          <Text style={styles.categoryText}>Back</Text>
          <Image
            source={require('./Image/pngtree-muscled-male-model-showing-his-back-workout-diet-fitness-png-image_12031899.png')}
            style={styles.Image11}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    marginTop:10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#410404',
  },
  categories: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:10,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9999ff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 30,
    height: 140, 
    width: '100%', 
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    overflow: 'visible',
  },
  categoryText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 1, 
  },
  Image1:{
    width: 160, 
    height: 170, 
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: -30, 
  },
  Image2:{
    width: 150, 
    height: 170, 
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: -30, 
  },
  Image3:{
    width: 150, 
    height: 150, 
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: -10, 
  },
  Image11: {
    width: 200, // Increased width
    height: 170, // Increased height
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: -30, // Higher negative value to float the image above the container more
  },
  
});
