import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const DetailStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    zIndex: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#1d1d1d',
  },
  containerDesc: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  containerFooter: {
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 15,
    width: '30%',
    justifyContent: 'space-between',
    height: 45,
  },
});
