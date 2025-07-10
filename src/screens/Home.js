import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PrimeDesign</Text>
      <Button title="About" onPress={() => navigation.navigate('About')} />
      <Button title="Services" onPress={() => navigation.navigate('Services')} />
      <Button title="Features" onPress={() => navigation.navigate('Features')} />
      <Button title="Contact" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 }
});
