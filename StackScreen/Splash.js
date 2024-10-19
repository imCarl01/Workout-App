import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');

export default function Splash() {
    const navigation = useNavigation();
    const animationRef = useRef(null);  // Use a ref for the LottieView

    useEffect(() => {
        // Navigate to the Onboarding screen after the animation completes
        const timeout = setTimeout(() => {
            navigation.navigate('OnboardingScreen');
        }, 4000); // Adjust the timing as needed, this represents the animation duration in milliseconds

        return () => clearTimeout(timeout);  // Cleanup on unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <LottieView
                ref={animationRef}  // Assign ref
                source={require('./Image/Animation - 1728740539538.json')}
                style={styles.onboardingImage}
                autoPlay
                loop={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',  // Optional, can set background color
    },
    onboardingImage: {
        width: width,
        height: 0.4 * height,
        resizeMode: 'contain',
    },
});
