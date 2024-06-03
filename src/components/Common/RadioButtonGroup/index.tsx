// index.tsx
import React from 'react';
import { RadioButtonGroup, RadioButtonWrapper, RadioButtonContainer, RadioButton, Label } from './styles';
import { Circle } from 'react-native-svg';

interface RadioButtonGroupProps {
  labels: string[];
  name: string;
  onChange: (value: string) => void;
  selectedValue: string;
}

const CustomRadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ labels, name, onChange, selectedValue }) => {
  return (
    <RadioButtonGroup>
      {labels.map((label, index) => (
        <RadioButtonWrapper key={index}>
          <RadioButtonContainer onPress={() => onChange(label)}>
            <RadioButton>
              <Circle
                cx="10"
                cy="10"
                r="8"
                stroke={selectedValue === label ? '#2D606F' : '#202a44'}
                strokeWidth="2"
                fill={selectedValue === label ? '#2D606F' : 'none'}
              />
            </RadioButton>
          </RadioButtonContainer>
          <Label>{label.replace(/^./, str => str.toUpperCase())}</Label>
        </RadioButtonWrapper>
      ))}
    </RadioButtonGroup>
  );
};

export default CustomRadioButtonGroup;
