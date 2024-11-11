// src/screens/Screen2.js
import React from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <Text style={{color:'red',fontWeight:'bold'}}>The world best bike</Text>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{width:70,borderWidth:1,borderColor:'red',alignItems:'center',margin:10}}>
          <Text style={{color:'red'}}>All</Text>
        </View>
        <View style={{width:70,borderWidth:1,borderColor:'red',alignItems:'center',margin:10}}>
          <Text style={{color:'red'}}>RoadBike</Text>
        </View>
        <View style={{width:70,borderWidth:1,borderColor:'red',alignItems:'center',margin:10}}>
          <Text style={{color:'red'}}>Mountain</Text>
        </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{backgroundColor:'pink',paddingLeft:25,paddingRight:25, borderRadius:10}}>
          <Image style={{ width: 100, height: 100 }} source={require('../assets/xexanh.png')} />
          <Text style={{alignSelf:'center'}}>Pinaredo</Text>
          <Text style={{alignSelf:'center'}}>$1800</Text>
        </View>
        <View style={{backgroundColor:'pink',paddingLeft:25,paddingRight:25, borderRadius:10}}>
          <Image style={{ width: 100, height: 100 }} source={require('../assets/xedo.png')} />
          <Text style={{alignSelf:'center'}}>Pina Motai</Text>
          <Text style={{alignSelf:'center'}}>$1700</Text>
        </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
        <View style={{backgroundColor:'pink',paddingLeft:25,paddingRight:25, borderRadius:10}}>
          <Image style={{ width: 100, height: 100 }} source={require('../assets/daptim.png')} />
          <Text style={{alignSelf:'center'}}>Pinaredo</Text>
          <Text style={{alignSelf:'center'}}>$1800</Text>
        </View>
        <View style={{backgroundColor:'pink',paddingLeft:25,paddingRight:25, borderRadius:10}}>
          <Image style={{ width: 100, height: 100 }} source={require('../assets/dapdo.png')} />
          <Text style={{alignSelf:'center'}}>Pina Motai</Text>
          <Text style={{alignSelf:'center'}}>$1700</Text>
        </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
        <View style={{backgroundColor:'pink',paddingLeft:25,paddingRight:25, borderRadius:10}}>
          <Image style={{ width: 100, height: 100 }} source={require('../assets/daptim.png')} />
          <Text style={{alignSelf:'center'}}>Pinaredo</Text>
          <Text style={{alignSelf:'center'}}>$1800</Text>
        </View>
        <View style={{backgroundColor:'pink',paddingLeft:25,paddingRight:25, borderRadius:10}}>
          <Image style={{ width: 100, height: 100 }} source={require('../assets/xedo.png')} />
          <Text style={{alignSelf:'center'}}>Pina Motai</Text>
          <Text style={{alignSelf:'center'}}>$1700</Text>
        </View>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
