// components/Footer.tsx

import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 PrimeDesign. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 12,
    color: '#999',
  },
});
