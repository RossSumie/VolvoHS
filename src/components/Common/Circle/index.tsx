// index.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { circleStyles } from './styles';

interface CircleProps {
  status: 'good' | 'average' | 'bad'; // Define more statuses as needed
  size: number;
}

const Circle: React.FC<CircleProps> = ({ status, size }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'good':
        return '#8fc54e';
      case 'average':
        return '#ffe600'; 
      case 'bad':
        return '#ff0000';
      default:
        return '#007bff'; // Blue
    }
  };

  const styles = circleStyles({ color: getStatusColor(), size });

  return (
    <View style={styles.circle}>
    </View>
  );
};

export default Circle;
