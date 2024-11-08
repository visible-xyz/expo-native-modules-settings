import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { NativeModulesSettingsViewProps } from './NativeModulesSettings.types';

const NativeView: React.ComponentType<NativeModulesSettingsViewProps> =
  requireNativeViewManager('NativeModulesSettings');

export default function NativeModulesSettingsView(props: NativeModulesSettingsViewProps) {
  return <NativeView {...props} />;
}
