// app/(tabs)/home.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text style={styles.title}>Welcome to PrimeDesign</Text>
      <Text>We design, develop, and deliver digital excellence.</Text>
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
