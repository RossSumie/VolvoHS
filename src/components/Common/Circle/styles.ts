import { StyleSheet } from 'react-native';

interface StyleProps {
  color: string;
  size: number;
}

export const circleStyles = (props: StyleProps) => StyleSheet.create({
  circle: {
    width: props.size,
    height: props.size,
    borderRadius: props.size / 2,
    backgroundColor: props.color,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  }
});
