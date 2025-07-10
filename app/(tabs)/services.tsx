// app/routeapp/(tabs)/services.tsx

import { View, Text, StyleSheet } from 'react-native';

export default function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Services</Text>

      <View style={styles.serviceBox}>
        <Text style={styles.serviceTitle}>🌐 Website Design Design </Text>
        <Text style={styles.serviceText}>Beautiful, responsive websites for all industries.</Text>
      </View>

      <View style={styles.serviceBox}>
        <Text style={styles.serviceTitle}>⚙️ Web Development</Text>
        <Text style={styles.serviceText}>Custom coding with clean, scalable architecture.</Text>
      </View>

      <View style={styles.serviceBox}>
        <Text style={styles.serviceTitle}>📈 SEO & Marketing</Text>
        <Text style={styles.serviceText}>Optimized for search engines and digital reach.</Text>
      </View>

      <View style={styles.serviceBox}>
        <Text style={styles.serviceTitle}>🛠 Maintenance & Support</Text>
        <Text style={styles.serviceText}>Ongoing help to keep your site secure and up-to-date.</Text>
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
  serviceBox: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  serviceText: {
    fontSize: 14,
    marginTop: 5,
  },
});
