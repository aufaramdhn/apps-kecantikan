import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const ProfileStyles = StyleSheet.create({
  headerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginVertical: 25,
    paddingLeft: 20,
    width: '30%',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  containerOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  flexDirection: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
