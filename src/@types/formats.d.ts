declare module '*.png';
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module 'react-native-voice' {
  const Voice: any;  // Modify according to the actual API if known
  export default Voice;
}
