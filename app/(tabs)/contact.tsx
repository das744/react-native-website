// app/routeapp/(tabs)/contact.tsx

import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function Contact() {
  const handleSubmit = () => {
    Alert.alert('Message Sent', 'Thanks for contacting us!');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Contact Us</Text>

        <TextInput placeholder="Your Name" style={styles.input} />
        <TextInput placeholder="Your Email" style={styles.input} keyboardType="email-address" />
        <TextInput placeholder="Your Message" multiline numberOfLines={5} style={styles.textArea} />

        <Button title="Send Message" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 6,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
});


// // app/(tabs)/contact.tsx
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export default function Contact() {
//   const handleSend = () => {
//     alert('Message sent!');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.heading}>Contact Us</Text>
//         <Text style={styles.text}>We’d love to hear from you!</Text>
//         <TouchableOpacity style={styles.button} onPress={handleSend}>
//           <Text style={styles.buttonText}>Send Message</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 24,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     elevation: 6, // for Android
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#333',
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 20,
//     color: '#555',
//   },
//   button: {
//     backgroundColor: '#007aff',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignSelf: 'flex-start',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });
