import React from 'react';
import { RadioButtonGroup, RadioButtonWrapper, RadioButtonContainer, RadioButton, Label } from './styles';
import { Circle } from 'react-native-svg';

interface RadioButtonOption {
  label: string;
  value: string;
}

interface RadioButtonGroupProps {
  options: RadioButtonOption[];
  name: string;
  onChange: (value: string) => void;
  selectedValue: string;
}

const CustomRadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, name, onChange, selectedValue }) => {
  return (
    <RadioButtonGroup>
      {options.map((option, index) => (
        <RadioButtonWrapper key={index}>
          <RadioButtonContainer onPress={() => onChange(option.value)}>
            <RadioButton>
              <Circle
                cx="10"
                cy="10"
                r="8"
                stroke={selectedValue === option.value ? '#2D606F' : '#202a44'}
                strokeWidth="2"
                fill={selectedValue === option.value ? '#2D606F' : 'none'}
              />
            </RadioButton>
          </RadioButtonContainer>
          <Label>{option.label.replace(/^./, str => str.toUpperCase())}</Label>
        </RadioButtonWrapper>
      ))}
    </RadioButtonGroup>
  );
};

export default CustomRadioButtonGroup;
