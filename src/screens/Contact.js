import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <TextInput placeholder="Your Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Message" style={styles.textArea} multiline />
      <Button title="Send Message" onPress={() => alert('Message sent!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  textArea: { borderWidth: 1, borderColor: '#ccc', padding: 10, height: 100, marginBottom: 10 }
});
