import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

export default function OnboardingScreen() {
  const navigation =useNavigation();

  function handleDone(){
    navigation.navigate("Login")
  }
  return (
    <Onboarding
    bottomBarColor="#fff"
    onSkip={handleDone}
    onDone={handleDone}
      pages={[
       
        {
          backgroundColor: '#fff',
          image: (
            <View>
              <LottieView
                source={require('./Image/Animation - 1728556454197.json')}
                style={styles.onboardingImage}
                autoPlay
                loop
              />
            </View>
          ),
          title: 'Build Your Strength',
          subtitle: 'Push your limits and achieve your fitness goals!',
          titleStyles: styles.title, 
          subTitleStyles: styles.subtitle
        },
        
        {
          backgroundColor: '#fff',
          image: (
            <View>
              <LottieView
                source={require('./Image/Animation - 1728557480988.json')}
                style={styles.onboardingImage}
                autoPlay
                loop
              />
            </View>
          ),
          title: 'Monitor Your Health',
          subtitle: 'Stay on top of your health with real-time metrics.',
          titleStyles: styles.title, 
          subTitleStyles: styles.subtitle
        },
        {
          backgroundColor: '#fff',
          image: (
            <View>
              <LottieView
                source={require('./Image/Animation - 1728560304577.json')}
                style={styles.onboardingImage}
                autoPlay
                loop
              />
            </View>
          ),
          title: 'Stay Motivated',
          subtitle: 'Achieve your fitness goals and stay motivated!',
          titleStyles: styles.title,
          subTitleStyles: styles.subtitle,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  onboardingImage: {
    width: width,
    height: 0.4 * height,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#9999ff', 
    textAlign: 'center',  
  },
  subtitle:{
    fontSize:19,
    justifyContent:"center",
    alignItems:"center",
    bottom:10,
  }
});
