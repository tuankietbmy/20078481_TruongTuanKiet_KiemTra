// src/screens/Screen1.js
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { goToScreen2 } from '../redux/navigationSlice';

export default function Screen1() {
  const dispatch = useDispatch();

  const handleGetStarted = () => {
    dispatch(goToScreen2());
  };

  return (
    <View style={styles.container}>
      <Text>A premium online store for</Text>
      <Text>sporter and their stylish choice</Text>
      <View style={{ backgroundColor: 'pink', padding: 20, borderRadius: 30, margin: 20 }}>
        <Image style={{ width: 250, height: 250 }} source={require('../assets/xexanh.png')} />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>POWER BIKE </Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SHOP</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'red', padding: 10, width: '90%', alignItems: 'center', borderRadius: 20 }}
        onPress={handleGetStarted}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
