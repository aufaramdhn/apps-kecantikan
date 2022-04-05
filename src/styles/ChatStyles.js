import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const ChatStyles = StyleSheet.create({
  popText1: {
    backgroundColor: COLORS.grey,
    width: '50%',
    padding: 10,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginLeft: 10,
    marginVertical: 10,
  },
  containerSend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
});
