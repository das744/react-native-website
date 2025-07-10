import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Services</Text>
      <Text>- Web Design</Text>
      <Text>- UI/UX</Text>
      <Text>- SEO</Text>
      <Text>- Hosting</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});
