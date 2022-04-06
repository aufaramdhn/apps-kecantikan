import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const OnBoardStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textOnBoard: {
    color: '#1d1d1d',
    fontSize: 18,
    width: 200,
    textAlign: 'center',
    fontSize: 28,
    marginVertical: 10,
  },
  containerButton: {
    backgroundColor: COLORS.primary,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
