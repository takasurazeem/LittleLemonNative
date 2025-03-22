import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItemsFlatlist from './components/MenuItemsFlatlist';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <MenuItemsFlatlist />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
