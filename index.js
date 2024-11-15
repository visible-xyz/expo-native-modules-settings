import NativeModulesSettings from "./src/NativeModulesSettings";

// Get the native constant value.
export const PI = NativeModulesSettings.PI;

export function hello() {
  return NativeModulesSettings.hello();
}
