import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  size: number;
  axis?: string;
  style?: any;
  delegated?: any;
}

const Spacer = ({size, axis, style = {}, ...delegated}: SpacerProps) => {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <View
      style={{
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  );
};

export default Spacer;
