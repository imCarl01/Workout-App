import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar,Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  const [dailyQuote, setDailyQuote] = useState("");

  const quotes = [
    "Push yourself because no one else is going to do it for you",
          "Don’t limit your challenges, challenge your limits",
          "Sweat now, shine later",
          "Success starts with self-discipline",
          "The body achieves what the mind believes",
          "It’s not about being the best ,It’s about being better than you were yesterday",
          "Strive for progress, not perfection",
          "You don’t have to be extreme, just consistent",
          "Your only limit is you",
          "The pain you feel today will be the strength you feel tomorrow",
          "Make every workout count",
          "The only bad workout is the one you didn’t do",
          "Small progress is still progress",
          "Wake up ,Work out ,Look hot ,Kick ass",
          "Fitness is not about being better than someone else ,It’s about being better than you used to be",
          "No matter how slow you go, you’re still lapping everyone on the couch",
          "Don’t stop when you’re tired ,Stop when you’re done",
          "Take care of your body ,It’s the only place you have to live",
          "You are stronger than you think",
          "Train insane or remain the same",
          "Do something today that your future self will thank you for",
          "The harder you work for something, the greater you’ll feel when you achieve it",
          "What seems impossible today will one day become your warm-up",
          "The secret to getting ahead is getting started",
          "A one-hour workout is 4% of your day ,No excuses",
          "Dream big ,Work hard ,Stay focused",
          "Strong is the new beautiful",
          "You can have results or excuses, not both",
          "Sweat is just fat crying",
          "Exercise is a celebration of what your body can do ,Not a punishment for what you ate",
          "Your body can stand almost anything ,It’s your mind you have to convince",
          "Fitness is like marriage; you can’t cheat on it and expect it to work",
          "The best project you’ll ever work on is you",
          "Motivation is what gets you started ,Habit is what keeps you going",
          "Be stronger than your excuses",
          "Fall in love with taking care of yourself",
          "Fitness is not a destination, it’s a way of life",
          "The difference between wanting and achieving is discipline",
          "Fit is not a destination; it’s a way of life",
          "Pain is temporary, pride is forever",
          "It doesn’t get easier ,You just get stronger",
          "Every workout is progress, no matter how small",
          "Don’t wish for a good body, work for it",
          "Get comfortable being uncomfortable",
          "Stop waiting for things to happen ,Go out and make them happen",
          "You did not wake up today to be mediocre",
          "Results happen over time, not overnight ,Work hard, stay consistent, and be patient",
          "The best way to predict the future is to create it",
          "Don’t count the days ,Make the days count",
          "Sweat, smile, and repeat",

  ];



  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setDailyQuote(randomQuote);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back,</Text>
          <Text style={styles.userName}>Carl Uchenna</Text>
        </View>

        {/* Notification Bell Section */}
        <View style={styles.notificationBellContainer}>
          <TouchableOpacity>
            <Ionicons name="notifications" size={24} color="#410404" />
          </TouchableOpacity>
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>19</Text>
          </View>
        </View>
      </View>

      <View style={styles.motivationContainer}>
        <LinearGradient colors={["#9999ff", "#9999ff"]} style={styles.background} />

        <View style={styles.dailyMotivationContainer}>
          <Text style={styles.sectionTitle}>Daily Motivation</Text>
          <View style={styles.theMotivation}>
            <Text style={styles.dailyQuoteMot}>{dailyQuote}</Text>
          </View>
        </View>

        <View style={styles.lottieViewContainer}>
          <LottieView 
            source={require("./Image/Animation - 1728560304577.json")} 
            style={styles.lottieAnimation}
            autoPlay
            loop
          />
        </View>
      </View>

      <View style={styles.fitnessStats}>
        {/* <LinearGradient colors={['#F21B14', '#410404']} style={styles.fitnessStatsBackground} /> */}
        <LinearGradient colors={['#9999ff', '#9999ff']} style={styles.fitnessStatsBackground} />
        
        <TouchableOpacity style={styles.statIcon}>
          <Ionicons name="footsteps" size={27} color="#FFD700" />
          <Text style={styles.statName}>Steps</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.statIcon}>
          <FontAwesome6 name="fire" size={27} color="#FFD700" />
          <Text style={styles.statName}>Kcal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.statIcon}>
          <FontAwesome name="map-marker" size={27} color="#FFD700" />
          <Text style={styles.statName}>Km</Text>
        </TouchableOpacity>
      </View>

      <View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop:10,
    padding:15,
    top:20,
    marginBottom:5,
  },
  welcomeText: {
    fontSize: 12, 
    fontWeight: '400', 
    color: '#333',
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#000',
  },
  notificationBellContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#F21B14',
    borderRadius: 10,
    padding: 3,
    minWidth: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  motivationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  dailyMotivationContainer: {
    flex: 1,
    marginRight: 15,
  },
  sectionTitle: { 
    fontSize: 12,
    fontWeight: '600',
    color: '#FFD700',
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    left: 12,
  },
  theMotivation: {
    width: '100%',
    height: 'auto',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  dailyQuoteMot: {
    fontSize: 16,
    fontWeight: '400',
    color: '#ffff',
    textAlign: 'left',
    fontWeight: "bold",
  },
  lottieViewContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  lottieAnimation: {
    width: '100%',
    height: '100%',
  },
  fitnessStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginVertical:25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  statName: {
    fontSize: 16,
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
    borderRadius: 20,
  },
  fitnessStatsBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 100,
    borderRadius: 20,
  },
});
