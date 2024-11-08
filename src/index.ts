import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NativeModulesSettings.web.ts
// and on native platforms to NativeModulesSettings.ts
import NativeModulesSettingsModule from './NativeModulesSettingsModule';
import NativeModulesSettingsView from './NativeModulesSettingsView';
import { ChangeEventPayload, NativeModulesSettingsViewProps } from './NativeModulesSettings.types';

// Get the native constant value.
export const PI = NativeModulesSettingsModule.PI;

export function hello(): string {
  return NativeModulesSettingsModule.hello();
}

export async function setValueAsync(value: string) {
  return await NativeModulesSettingsModule.setValueAsync(value);
}

const emitter = new EventEmitter(NativeModulesSettingsModule ?? NativeModulesProxy.NativeModulesSettings);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NativeModulesSettingsView, NativeModulesSettingsViewProps, ChangeEventPayload };
