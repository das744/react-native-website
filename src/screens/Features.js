import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Features() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why Choose Us</Text>
      <Text>✔ Modern Design</Text>
      <Text>✔ Fast Load Time</Text>
      <Text>✔ Responsive Layout</Text>
      <Text>✔ Great Support</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});
