import NativeModulesSettings from "./NativeModulesSettings";

export function setChannelId(channelId: string): string {
  return NativeModulesSettings.setChannelId(channelId);
}

export function getTheme(): string {
  return NativeModulesSettings.getTheme();
}
