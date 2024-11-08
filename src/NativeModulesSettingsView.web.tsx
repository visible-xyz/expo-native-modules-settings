import * as React from 'react';

import { NativeModulesSettingsViewProps } from './NativeModulesSettings.types';

export default function NativeModulesSettingsView(props: NativeModulesSettingsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
