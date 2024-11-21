import { StyleSheet, Text, View, Pressable } from "react-native";

import * as NativeModulesSettings from "native-modules-settings";

export default function App() {
  async function setupNotificationChannel() {
    console.log(JSON.stringify(NativeModulesSettings, null, 4));
    const result = await NativeModulesSettings.setChannelId("my_channel_id1");
    console.log(result); // Logs success, error, or status message
    console.log(NativeModulesSettings.getTheme()); // Logs success, error, or status message
  }
  return (
    <View style={styles.container}>
      <Text>{"NativeModulesSettings.setChannelId()"}</Text>
      <Pressable onPress={setupNotificationChannel}>
        <Text>RUN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
