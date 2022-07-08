import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.title}>Welcome to MiVote</Text>
        <Text style={styles.innerTitle}>Participate in the decision today</Text>
      </View>
      <Image
        source={require('../assets/img/header.png')}
        style={styles.image}
      />
      <View style={styles.action}>
        <Button title={'Get Started'} onPress={() => navigate('Login')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
  },
  innerTitle: {
    paddingTop: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  action: {
    marginTop: 24,
  },
});
