// app/(tabs)/about.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View>
      <Text style={styles.title}>About Us</Text>
      <Text>PrimeDesign is a digital agency focused on web excellence.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

