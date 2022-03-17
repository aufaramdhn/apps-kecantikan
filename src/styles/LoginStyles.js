import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const LoginStyles = StyleSheet.create({
  ContainerImageLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  ImageProfile: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  Input: {
    borderWidth: 2,
    width: '95%',
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: '#c7c7c7',
  },
});
