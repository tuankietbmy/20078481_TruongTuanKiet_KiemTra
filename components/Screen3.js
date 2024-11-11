import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectSelectedProduct } from '../redux/selectedProductSlice';

export default function Screen3() {
  const product = useSelector(selectSelectedProduct);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>No product selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={product.image} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: 'gray',
  },
});
