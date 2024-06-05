import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
      <View style={{ flex : 1}}>
        <View style={{ flex:1, backgroundColor: 'tomato'}}></View>
        <View style={{ flex:1, backgroundColor: 'teal'}}></View>
        <View style={{ flex:1, backgroundColor: 'orange'}}></View>
      </View>
  );
}

const styles = StyleSheet.create({
});
