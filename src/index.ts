import NativeModulesSettings from "./NativeModulesSettings";

// // Get the native constant value.
// export const PI = NativeModulesSettings.PI;

// export function hello(): string {
//   return NativeModulesSettings.hello();
// }

export function setChannelId(channelId: string): string {
  return NativeModulesSettings.setChannelId(channelId);
}

export function getTheme(): string {
  return NativeModulesSettings.getTheme();
}
