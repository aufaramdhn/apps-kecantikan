import {StyleSheet} from 'react-native';
import COLORS from '../constant/Colors';

export const EditProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  containerIcon: {
    backgroundColor: COLORS.primary,
    padding: 6,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
  containerInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.grey,
    // padding: 5,
    marginTop: 10,
    paddingVertical: 10,
  },
  containerPicker: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#c7c7c7',
  },
  textPicker: {
    fontSize: 16,
    fontWeight: '400',
    // color: '#1d1d1d',
    marginBottom: 10,
  },
  containerKodePos: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.grey,
    paddingRight: 95,
    paddingVertical: 12,
    paddingLeft: 10,
  },
});
