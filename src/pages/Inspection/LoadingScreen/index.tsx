// LoadingScreen.tsx
import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet, Image } from 'react-native';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style ={styles.Imgcontainer}>
      <Text style={styles.text}>We are analyzing your answers...</Text>
      <ActivityIndicator size={200} color="#202a44" />
      </View>
      <Image
      style={styles.image}
      source={require('../../../assets/images/cute_loader.jpg')}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  Imgcontainer: {
    marginTop: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginBottom: 24,
    fontSize: 24,
    color: '#000',
    fontFamily: 'VolvoNovum3-Bold'
  },
  image: {
    marginBottom:32,
    width: 300,
    height: 200
  },
});

export default LoadingScreen;
