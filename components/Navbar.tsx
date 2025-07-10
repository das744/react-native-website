

// components/Navbar.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { useRouter, usePathname } from 'expo-router';

type RouteValue = 'home' | 'about' | 'services' | 'features' | 'contact';

const navItems: { label: string; value: RouteValue }[] = [
  { label: 'Home', value: 'home' },
  { label: 'About', value: 'about' },
  { label: 'Services', value: 'services' },
  { label: 'Features', value: 'features' },
  { label: 'Contact', value: 'contact' },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const current = pathname.replace('/(tabs)/', '') as RouteValue;
  const [selected, setSelected] = useState<RouteValue>(current || 'home');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (value: RouteValue) => {
    setSelected(value);
    setShowDropdown(false);
    router.push(`/${value}`);
  };

  return (
    <View style={styles.navbar}>
      {/* Left: Logo */}
      <View style={styles.left}>
        <Text style={styles.logo}>PrimeDesign</Text>
      </View>

      {/* Center: Contact Button */}
      <View style={styles.center}>
        <TouchableOpacity onPress={() => handleSelect('contact')}
           style={styles.contactButton}
    activeOpacity={0.7}
          >
          <Text style={styles.contact}>Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Right: Dropdown Button */}
      <View style={styles.right}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setShowDropdown(true)}
        >
          <Text style={styles.dropdownText}>{selected.toUpperCase()} ▼</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown Modal */}
      <Modal visible={showDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowDropdown(false)}
          activeOpacity={1}
        >
          <View style={styles.dropdown}>
            <FlatList
              data={navItems}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text style={styles.dropdownItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fdfdfd',
    borderBottomWidth: 1,
    borderColor: '#eee',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2b2b2b',
  },
  contact: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
    textAlign: 'center',
  },
  dropdownButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#eeeeee',
    borderRadius: 6,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  contactButton: {
  backgroundColor: '#007aff',
  paddingVertical: 8,
  paddingHorizontal: 20,
  borderRadius: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5, // Android shadow
},
contactButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
},

});
