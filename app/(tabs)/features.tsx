// app/routeapp/(tabs)/features.tsx

import { View, Text, StyleSheet } from 'react-native';

export default function Features() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Why Choose PrimeDesign?</Text>

      <View style={styles.featureItem}>
        <Text style={styles.featureBullet}>✅</Text>
        <Text style={styles.featureText}>Modern, clean UI/UX</Text>
      </View>

      <View style={styles.featureItem}>
        <Text style={styles.featureBullet}>⚡</Text>
        <Text style={styles.featureText}>Fast loading and performance optimized</Text>
      </View>

      <View style={styles.featureItem}>
        <Text style={styles.featureBullet}>📱</Text>
        <Text style={styles.featureText}>Fully responsive on all devices</Text>
      </View>

      <View style={styles.featureItem}>
        <Text style={styles.featureBullet}>🔒</Text>
        <Text style={styles.featureText}>Secure and reliable</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureBullet: {
    fontSize: 20,
    marginRight: 10,
  },
  featureText: {
    fontSize: 16,
  },
});
