import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../redux/productsSlice';
import { setSelectedProduct } from '../redux/selectedProductSlice';
import { useNavigation } from '@react-navigation/native';

export default function Screen2() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePress = (item) => {
    dispatch(setSelectedProduct(item)); 
    navigation.navigate('Screen3');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productContainer} onPress={() => handlePress(item)}>
      <Image style={styles.productImage} source={item.image} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world's best bikes</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    justifyContent: 'space-around',
  },
  productContainer: {
    backgroundColor: 'pink',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  productImage: {
    width: 90,
    height: 90,
  },
  productName: {
    alignSelf: 'center',
    marginTop: 5,
  },
  productPrice: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
