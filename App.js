import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Screen1 from './components/Screen1';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Screen1 />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },

});
