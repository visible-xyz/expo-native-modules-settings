import NativeModulesSettings from "./NativeModulesSettings";

// Get the native constant value.
export const PI = NativeModulesSettings.PI;

export function hello(): string {
  return NativeModulesSettings.hello();
}

export function setChannelId(packageName: string, channelId: string): void {
  NativeModulesSettings.setChannelId(packageName, channelId);
}
