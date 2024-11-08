import { StyleSheet, Text, View } from 'react-native';

import * as NativeModulesSettings from 'native-modules-settings';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{NativeModulesSettings.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
